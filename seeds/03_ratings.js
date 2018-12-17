exports.seed = (knex, Promise) => {
  return knex("ratings").del()
    .then(() => {
      return knex("ratings").insert([{
          question_1: "Hello ",
          question_2: "My ",
          question_3: "Name ",
          question_4: "Is ",
          question_5: "Ben ",
          question_6: "I ",
          question_7: "Like ",
          question_8: "To ",
          question_9: "Code ",
          question_10: "Thank ",
        },
        {
          question_1: "You ",
          question_2: "For ",
          question_3: "All ",
          question_4: "The ",
          question_5: "Help ",
          question_6: "I ",
          question_7: "Truly ",
          question_8: "Apperciate ",
          question_9: "It ",
          question_10: "Are ",
        },
        {
          question_1: "There ",
          question_2: "Any ",
          question_3: "Questions ",
          question_4: "That ",
          question_5: "I ",
          question_6: "Can ",
          question_7: "Answer ",
          question_8: "For ",
          question_9: "You ",
          question_10: "Today ",
        },
      ]);
    });
};