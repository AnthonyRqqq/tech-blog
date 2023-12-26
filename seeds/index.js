// Import all seed methods
const seedBlogposts = require('./blogpost-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

// Seeds all tables with test data
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database Synced');

    await seedUsers();
    console.log('Users seeded');

    await seedBlogposts();
    console.log('Blogposts seeded');

    await seedComments();
    console.log('Comments seeded');

    process.exit(0);
};

seedAll();