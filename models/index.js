// Import models
const Blogpost = require('./Blogpost');
const User = require('./User');
const Comment = require('./Comment');

// Users have many Blogposts
User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blogposts have many Comments
Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Blogpost,
    User,
    Comment
};