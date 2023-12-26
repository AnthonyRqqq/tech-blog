const { User } = require('../models');

const userData = [
    {
        username: 'adminOne',
        password: 'rootroot'
    },
    {
        username: 'adminTwo',
        passowrd: 'rootroot'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;