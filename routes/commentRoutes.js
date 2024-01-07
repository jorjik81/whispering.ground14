const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/commentController');

// Create a new comment
router.post('/', createComment);

module.exports = router;