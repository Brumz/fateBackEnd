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
        {
          first_name: "DeBronis",
          last_name: "Warren",
          accountUser_id: 4,
          rating_id: 4,
        },
        {
          first_name: "Brandon",
          last_name: "RedShirt",
          accountUser_id: 5,
          rating_id: 5,
        },
        {
          first_name: "Sonja ",
          last_name: "Chacon",
          accountUser_id: 6,
          rating_id: 6,
        },
        {
          first_name: "Chia-en (Peter)",
          last_name: "Fu",
          accountUser_id: 7,
          rating_id: 7,
        },
        {
          first_name: "Gary",
          last_name: "Anderson",
          accountUser_id: 8,
          rating_id: 8,
        },
        {
          first_name: "Conner",
          last_name: "Chevaillier",
          accountUser_id: 9,
          rating_id: 9,
        },
        {
          first_name: "Phillip",
          last_name: "Hengemuhle",
          accountUser_id: 10,
          rating_id: 10,
        },
        {
          first_name: "Greg",
          last_name: "Forney",
          accountUser_id: 11,
          rating_id: 11,
        },
        {
          first_name: "Dane",
          last_name: "Parke",
          accountUser_id: 12,
          rating_id: 12,
        },
        {
          first_name: "Joshua",
          last_name: "Scala",
          accountUser_id: 13,
          rating_id: 13,
        },
        {
          first_name: "Jess",
          last_name: "MarkGraf",
          accountUser_id: 14,
          rating_id: 14,
        },
        {
          first_name: "Robert (Trey)",
          last_name: "Young",
          accountUser_id: 15,
          rating_id: 15,
        },
        {
          first_name: "Ryan",
          last_name: "St.Germain",
          accountUser_id: 16,
          rating_id: 16,
        },
        {
          first_name: "Evan",
          last_name: "Young",
          accountUser_id: 17,
          rating_id: 17,
        },
        {
          first_name: "Charity",
          last_name: "Van Buren",
          accountUser_id: 18,
          rating_id: 18,
        },
        {
          first_name: "Andrew",
          last_name: "Pedersen",
          accountUser_id: 19,
          rating_id: 19,
        },
        {
          first_name: "Meredith",
          last_name: "Fontana",
          accountUser_id: 20,
          rating_id: 20,
        },
        {
          first_name: "Kate",
          last_name: "Schaefer",
          accountUser_id: 21,
          rating_id: 21,
        },
        {
          first_name: "Justin",
          last_name: "Williams",
          accountUser_id: 22,
          rating_id: 22,
        },
        {
          first_name: "James",
          last_name: "Liang",
          accountUser_id: 23,
          rating_id: 23,
        },
        {
          first_name: "Grant",
          last_name: "Fogle",
          accountUser_id: 24,
          rating_id: 24,
        }
      ]);
    });
};