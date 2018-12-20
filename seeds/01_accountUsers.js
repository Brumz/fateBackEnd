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
        {
          first_name: "DeBronis",
          last_name: "Warren",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Brandon",
          last_name: "RedShirt",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Sonja",
          last_name: "Chacon",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Peter",
          last_name: "Fu",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Gary",
          last_name: "Anderson",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Conner",
          last_name: "Chevaillier",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Phillip",
          last_name: "Hengemuhle",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Greg",
          last_name: "Forney",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Dane",
          last_name: "Parke",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Joshua",
          last_name: "Scala",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Jess",
          last_name: "MarkGraf",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Trey",
          last_name: "Young",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Ryan",
          last_name: "St.Germain",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Evan",
          last_name: "Young",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Charity",
          last_name: "Van Buren",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Andrew",
          last_name: "Pedersen",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Meredith",
          last_name: "Fontana",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Kate",
          last_name: "Schaefer",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Justin",
          last_name: "Williams",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "James",
          last_name: "Warren",
          email: "sample@email.com",
          password: "abc",
        },
        {
          first_name: "Grant",
          last_name: "Warren",
          email: "sample@email.com",
          password: "abc",
        },
      ]);
    });
};