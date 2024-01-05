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

        // Serializes data
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

// Route for specific blogpost
// url: /blogpost/:id
router.get('/blogpost/:id', async (req, res) => {
    try {
        // Finds blogpost by id primary key
        const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
            // Includes comments associated with the blogpost
            include: [
                {
                    model: Comment,
                },
            ],
        });

        // Serializes data
        const blogpost = dbBlogpostData.get({ plain: true });

        // Sends data to blogpost.handlebars
        res.render('blogpost', {
            blogpost,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
