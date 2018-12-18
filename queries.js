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
    },
    getProfileById(id) {
        return db("profiles")
            .where("id", id)
            .first()
    },
    createProfile(newProfile) {
        return db("profiles")
            .insert(newProfile)
            .returning("*")
    },
    updateProfile(id, profile) {
        return db("profiles")
            .where("id", id)
            .update(profile)
            .returning("*")
    },
    deleteProfile(id) {
        return db("profiles")
            .where("id", id)
            .del()
    }, 
    getAllRatings() {
        return db("ratings")
    }, 
    getRatingsById(id) {
        return db("ratings")
            .where("id", id)
            .first()
    },
    createRating(newRating) {
        return db("ratings")
            .insert(newRating)
            .returning("*")
    }, 
    updateRating(id, rating) {
        return db("ratings")
            .where("id", id)
            .update(rating)
            .returning("*")
    }, 
    deleteRating(id) {
        return db("ratings") 
            .where("id", id)
            .del()
    }
}