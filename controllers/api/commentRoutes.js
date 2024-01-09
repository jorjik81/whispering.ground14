const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//  comment-related routes 

router.post('/', withAuth, async (req, res) => {
	try {
		const newComment = await Comment.create({
			...req.body,
			user_id: req.session.user_id,
		});
		res.json(newComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const commentData = await Comment.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!commentData) {
			res.status(404).json({ message: 'incorrect id' });
		}
		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const commentData = await Comment.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!commentData) {
			res.status(404).json({ message: 'incorrect id' });
		}
		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;