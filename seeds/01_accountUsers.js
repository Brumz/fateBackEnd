exports.seed = (knex, Promise) => {
  return knex("accountUsers").del()
    .then(() => {
      return knex("accountUsers").insert([{
          first_name: "Bethany",
          last_name: "Mitch",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Reid",
          last_name: "Garner",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Ben",
          last_name: "Rumsey",
          email: "sample@email.com",
          password: "abc",
        },
      ]);
    });
};