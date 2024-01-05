const router = require('express').Router();
const { Blogpost } = require('../../models');

// For creating new blogposts
// url: /api/blogpost/
router.post('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.create({
            title: req.body.title,
            content: req.body.content,
        });

        res.json(dbBlogpostData);
        console.log('Blogpost created!');
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

