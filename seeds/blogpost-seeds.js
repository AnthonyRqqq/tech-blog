const { Blogpost } = require('../models');

const blogpostData = [
    {
        title: 'Test Blog #1',
        content: 'Who is excited for the very first test blog!?',
        user_id: 1
    },
    {
        title: 'Test Blog #2',
        content: 'Slightly less excited for test blog two.',
        user_id: 1
    },
    {
        title: 'Test Blog #3',
        content: 'Test Blog Three? Meh.',
        user_id: 2
    }
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;