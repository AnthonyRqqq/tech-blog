const { User } = require('../models');

const userData = [
    {
        username: 'adminOne',
        password: 'rootroot'
    },
    {
        username: 'adminTwo',
        password: 'rootroot'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;