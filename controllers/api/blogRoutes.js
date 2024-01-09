const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

// blog-related routes here
router.post('/', withAuth, async (req, res) => {
	try {
		const newBlogPost = await BlogPost.create({
			...req.body,
			user_id: req.session.user_id,
		});
		res.json(newBlogPost);
		console.log(newBlogPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const blogData = await BlogPost.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!blogData) {
			res.status(404).json({ message: 'incorrect id' });
		}
		res.status(200).json(blogData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const blogData = await BlogPost.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!blogData) {
			res.status(404).json({ message: 'incorrect' });
		}
		res.status(200).json(blogData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;