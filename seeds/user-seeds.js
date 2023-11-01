const { User } = require('../models');

const userData = [
    {
        username: "max_blaul",
        github: "maxblaul",
        email: "blaulmax@gmail.com",
        password: "p@ssword1"
    }]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;