const router = require('express').Router();
const { Comment } = require('../../models');

// For creating new comments
// url: /api/comment
router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            content: req.body.content
        });

        res.json(dbCommentData);
        console.log('Successfully commented!');
    } catch (err) {
        res.json(err);
        console.error(err);
    };
});