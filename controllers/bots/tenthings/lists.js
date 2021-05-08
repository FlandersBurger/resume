const List = require('../../../models/tenthings/list')();

exports.getRandomList = async parameters => {
	const count = await List.countDocuments(parameters).exec();
	if (count === 0) return;
	const lists = await List.find(parameters)
		.select('-votes')
		.populate('creator')
		.limit(1)
		.skip(Math.floor(Math.random() * count))
		.exec();
	return lists[0];
};

exports.getScore = votes => {
	//((upvotes / (upvotes + downvotes)) + (skips / plays)) / 2
	//(upvote ratio in regards to total votes + skip ratio in regards to plays) / 2
	const upvotes = votes.filter(vote => vote.vote > 0);
	const voteRatio = upvotes.length / list.votes.length;
	return (voteRatio + list.skips / list.plays) / 2;
};
