module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Benjamin Graham",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dale Carnegie",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Carreyrou",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Simon Sinek",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Napoleon Hill",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Stephen R. Covey",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Eric Ries",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jim Collins",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jane Austen",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Harper Lee",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "F. Scott Fitzgerald",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Agatha Christie",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Raymond Chandler",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gillian Flynn",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "James M. Cain",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Josephine Tey",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lewis Carroll",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "J.R.R. Tolkien",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "T.H. White",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Richard Adams",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Susan Cooper",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Patricia A. McKillip",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Alexandre Dumas",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Robert Louis Stevenson",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mary Shelley",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Edgar Allan Poe",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bram Stoker",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "H. P. Lovecraft",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Daphne du Maurier",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ray Bradbury",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Walter Isaacson",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sylvia Nasar",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Martin Gilbert",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sonia Nazario",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Charlotte Brontë",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "E.M. Forster",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "William Goldman",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "William Shakespeare",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Margaret Mitchell",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Nicholas Sparks",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Colleen McCullough",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("authors", null, {});
  },
};
