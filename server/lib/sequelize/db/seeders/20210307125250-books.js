module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "The Intelligent Investor",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/1.jpg",
          price: 4.99,
          author_id: 1,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "How to Win Friends & Influence People",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/2.jpg",
          price: 6.99,
          author_id: 2,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/3.jpg",
          price: 12.43,
          author_id: 3,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            "Start with Why: How Great Leaders Inspire Everyone to Take Action",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/4.jpg",
          price: 12.68,
          author_id: 4,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Think and Grow Rich!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/5.jpg",
          price: 18.23,
          author_id: 5,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The 7 Habits of Highly Effective People",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/6.jpg",
          price: 12.35,
          author_id: 6,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Lean Startup",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/7.jpg",
          price: 4.99,
          author_id: 7,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title:
            "Good to Great: Why Some Companies Make the Leap and Others Don't",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/business/8.jpg",
          price: 6.99,
          author_id: 8,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Pride and Prejudice",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/classic/1.jpg",
          price: 4.99,
          author_id: 9,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "To Kill a Mockingbird",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/classic/2.jpg",
          price: 6.99,
          author_id: 10,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Great Gatsby",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/classic/3.jpg",
          price: 12.43,
          author_id: 11,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "And Then There Were None",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/detective/1.jpg",
          price: 4.99,
          author_id: 12,
          category_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Big Sleep",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/detective/2.jpg",
          price: 6.99,
          author_id: 13,
          category_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Gone Girl",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/detective/3.jpg",
          price: 12.43,
          author_id: 14,
          category_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Postman Always Rings Twice",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/detective/4.jpg",
          price: 12.68,
          author_id: 15,
          category_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Daughter of Time",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/detective/5.jpg",
          price: 18.23,
          author_id: 16,
          category_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Alice’s Adventures in Wonderland",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/1.jpg",
          price: 4.99,
          author_id: 17,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Hobbit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/2.jpg",
          price: 6.99,
          author_id: 18,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Sword in the Stone",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/3.jpg",
          price: 12.43,
          author_id: 19,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Fellowship of the Ring",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/4.jpg",
          price: 12.68,
          author_id: 18,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Watership Down",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/5.jpg",
          price: 18.23,
          author_id: 20,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Dark is Rising",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/6.jpg",
          price: 12.35,
          author_id: 21,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Forgotten Beasts of Eld",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/fantasy/7.jpg",
          price: 4.99,
          author_id: 22,
          category_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Three Musketeers",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/adventure/1.jpg",
          price: 4.99,
          author_id: 23,
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Treasure Island",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/adventure/2.jpg",
          price: 6.99,
          author_id: 24,
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Frankenstein",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/1.jpg",
          price: 4.99,
          author_id: 25,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Fall of the House of Usher and Other Tales",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/2.jpg",
          price: 6.99,
          author_id: 26,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Dracula",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/3.jpg",
          price: 12.43,
          author_id: 27,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "At the Mountains of Madness",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/4.jpg",
          price: 12.68,
          author_id: 28,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Rebecca",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/5.jpg",
          price: 18.23,
          author_id: 29,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Something Wicked This Way Comes",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/horror/6.jpg",
          price: 12.35,
          author_id: 30,
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Steve Jobs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/biography/1.jpg",
          price: 4.99,
          author_id: 31,
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "A Beautiful Mind",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/biography/2.jpg",
          price: 6.99,
          author_id: 32,
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Churchill: A Life",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/biography/3.jpg",
          price: 12.43,
          author_id: 33,
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Enrique's Journey",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/biography/4.jpg",
          price: 12.68,
          author_id: 34,
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Jane Eyre",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/1.jpg",
          price: 4.99,
          author_id: 35,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Maurice",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/2.jpg",
          price: 6.99,
          author_id: 36,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Princess Bride",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/3.jpg",
          price: 12.43,
          author_id: 37,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Romeo and Juliet",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/4.jpg",
          price: 12.68,
          author_id: 38,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Gone with the Wind",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/5.jpg",
          price: 18.23,
          author_id: 39,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "A Walk to Remember",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/6.jpg",
          price: 12.35,
          author_id: 40,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "The Thorn Birds",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui quaerat ex vero fugiat! Sequi vel maxime perspiciatis distinctio excepturi eos animi, molestiae eum sit corporis vitae veniam, odit mollitia, quisquam quae facilis impedit cupiditate facere? Architecto rerum minima quidem, velit reiciendis culpa repudiandae atque perspiciatis sequi pariatur fugiat, a autem blanditiis, unde cumque eius aperiam saepe laborum voluptatem iusto? In incidunt consectetur eos aliquam perspiciatis placeat unde, officia quas!",
          cover: "/covers/romance-novels/7.jpg",
          price: 4.99,
          author_id: 41,
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
