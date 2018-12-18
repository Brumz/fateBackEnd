const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3002
const queries = require("./queries")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/accountusers", (req, res) => {
    queries.getAllAccountUsers().then(accountUsers => res.json(accountUsers))
})
app.get("/accountusers/:id", (req, res) => {
    queries.getAccountUserById(req.params.id).then(accountUser => res.status(200).json(accountUser))
})
app.post("/accountusers", (req, res) => {
    queries.createAccountUser(req.body).then(newAccount => res.json(newAccount))
})
app.put("/accountusers/:id", (req, res) => {
    queries.updateAccountUser(req.params.id, req.body).then(updateAccount => res.json(updateAccount))
})
app.delete("/accountusers/:id", (req, res) => {
    queries.deleteAccountUser(req.params.id).then(res.sendStatus(204))
})



app.listen(port, () => {
    console.log('listening on port:', port)
})