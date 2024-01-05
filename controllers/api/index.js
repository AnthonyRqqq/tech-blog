const router = require('express').Router();

const blogpostRoutes = require('./blogpost-routes');
const commentRoutes = require('./comment-routes');

router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;