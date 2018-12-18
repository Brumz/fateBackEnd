exports.up = (knex, Promise) => {
    return knex.schema.createTable("ratings", (rating) => {
        rating.increments("id")
        rating.string("question_1").notNullable()
        rating.string("question_2").notNullable()
        rating.string("question_3").notNullable()
        rating.string("question_4").notNullable()
        rating.string("question_5").notNullable()
        rating.string("question_6").notNullable()
        rating.string("question_7").notNullable()
        rating.string("question_8").notNullable()
        rating.string("question_9").notNullable()
        rating.string("question_10").notNullable()
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists("ratings")
};