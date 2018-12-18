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
app.get("/profiles", (req, res) => {
    queries.getAllProfiles().then(profiles => res.json(profiles))
})
app.get("/profiles/:id", (req, res) => {
    queries.getProfileById(req.params.id).then(profile => res.status(200).json(profile))
})
app.post("/profiles", (req, res) => {
    queries.createProfile(req.body).then(newProfile => res.json(newProfile))
})
app.put("/profiles/:id", (req, res) => {
    queries.updateProfile(req.params.id, req.body).then(updateProfile => res.json(updateProfile))
})
app.delete("/profiles/:id", (req, res) => {
    queries.deleteProfile(req.params.id).then(res.sendStatus(204))
})
app.get("/ratings", (req, res) => {
    queries.getAllRatings().then(ratingsResponse => res.json(ratingsResponse))
})
app.get("/ratings/:id", (req, res) => {
    queries.getRatingsById(req.params.id).then(responseIdRating => res.status(200).json(responseIdRating))
})
app.post("/ratings", (req, res) => {
    queries.createRating(req.body).then(newRating => res.json(newRating))
})
app.put("/ratings/:id", (req, res) => {
    queries.updateRating(req.params.id, req.body).then(updatedRating => res.json(updatedRating))
})
app.delete("/ratings/:id", (req, res) => {
    queries.deleteRating(req.params.id).then(res.sendStatus(204))
})


app.listen(port, () => {
    console.log('listening on port:', port)
})