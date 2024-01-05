const router = require('express').Router();
const { Blogpost, Comment } = require('../models');

// Homepage route, nothing added on end of url
router.get('/', async (req, res) => {
    try {
        // Finds all blogposts
        const dbBlogpostData = await Blogpost.findAll({
            // Includes all comments with their respective blogposts
            include: [
                {
                    model: Comment,
                },
            ],
        });

        // Serializes data for sequelize
        const blogposts = dbBlogpostData.map((blogpost) =>
        blogpost.get({ plain: true })
        );

        // Sends data to homepage.handlebars
        res.render('homepage', {
            blogposts
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});