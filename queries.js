const db = require("./databaseConnections")
module.exports = {
    getAllAccountUsers() {
        return db("accountUsers")
    },
    getAccountUserById(id) {
        return db("accountUsers")
            .where("id", id)
            .first()
    },
    createAccountUser(newAccount) {
        return db("accountUsers")
            .insert(newAccount)
            .returning("*")
    },
    updateAccountUser(id, account) {
        return db("accountUsers")
            .where("id", id)
            .update(account)
            .returning("*")
    },
    deleteAccountUser(id) {
        return db("accountUsers")
            .where("id", id)
            .del()
    },
    getAllProfiles() {
        return db("profiles")
    }
}