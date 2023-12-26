const { Comment } = require('../models');

const commentData = [
    {
        content: 'First comment hype!',
        blogpost_id: 1
    },
    {
        content: 'First!',
        blogpost_id: 1
    },
    {
        content: 'Actually you were second ^',
        blogpost_id: 1
    },
    {
        content: 'First!',
        blogpost_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;