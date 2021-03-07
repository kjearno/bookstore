module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Business",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Classic",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Children's Books",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Detective",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fantasy",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Adventure",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Horror",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Biography",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Romance Novels",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
