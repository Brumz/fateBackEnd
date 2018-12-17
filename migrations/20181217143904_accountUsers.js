exports.up = (knex, Promise) => {
    return knex.schema.createTable("accountUsers", (accountUser) => {
        accountUser.increments("id")
        accountUser.string("first_name").notNullable()
        accountUser.string("last_name").notNullable()
        accountUser.string("email").notNullable()
        accountUser.string("password").notNullable()
    })

};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists("accountUsers")
};