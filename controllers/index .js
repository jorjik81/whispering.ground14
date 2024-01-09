
const router = require('express').Router();
const authController = require('./auth');
const blogController = require('./blogController');
const commentController = require('./commentController');

// Authentication routes
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', authController.signout);

// Blog routes
router.post('/blog', blogController.createBlogPost);
router.put('/blog/:id', blogController.updateBlogPost);
router.delete('/blog/:id', blogController.deleteBlogPost);

// Comment routes
router.post('/comment', commentController.createComment);
router.get('/comment/:blogPostId', commentController.getCommentsByBlogPostId);

module.exports = router;



