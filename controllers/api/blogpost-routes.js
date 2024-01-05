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

// For updating a blogpost
// url: /api/blogpost/:id
router.put('/:id', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        console.log('Update successful!');
        res.json(dbBlogpostData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

// For deleting a blogpost
// url: /api/blogpost/:id
router.delete('/:id', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        );

        console.log('Successful deletion!');
        res.json(dbBlogpostData);
    } catch (err) {
        console.error(err);
        res.json(err)
    };
});