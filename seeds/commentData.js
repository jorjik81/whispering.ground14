const { Comment } = require('../models')
const commentdata = [
	{
		"text": " comment-1",
		"blogpost_id": 1
	},
	{
		"text": "a second comment-2",
		"blogpost_id": 2
	},
	{
		"text": "comment-3",
		"blogpost_id": 3
	}
]

const seedcommentdata = () =>  Comment.bulkCreate(commentdata);
module.exports = seedcommentdata;