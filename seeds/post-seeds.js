const { Post } = require('../models');

const postData = [
    {
        title: "Test test test",
        post_content: "test test test",
        user_id: 1
    }]
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;