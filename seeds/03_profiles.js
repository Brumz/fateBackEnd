exports.seed = (knex, Promise) => {
  return knex("profiles").del()
    .then(() => {
      return knex("profiles").insert([{
          first_name: "Bethany",
          last_name: "Mitch",
          accountUser_id: 1,
          rating_id: 1,
        },
        {
          first_name: "Reid",
          last_name: "Garner",
          accountUser_id: 2,
          rating_id: 2,
        },
        {
          first_name: "Ben",
          last_name: "Rumsey",
          accountUser_id: 3,
          rating_id: 3,
        },
      ]);
    });
};