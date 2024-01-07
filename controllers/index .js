
const router = require('express').Router();
const Authentication = require('../../controllers/auth');
const blogController = require('../../controllers/BlogController');
const commentController = require('../../controllers/commentController');

// Authentication routes
router.post('/signup', auth.signup);
router.post('/signin', auth.signin);
router.post('/signout', auth.signout);

module.exports = router;



