const List = require('../../../models/tenthings/list')();

exports.getRandomList = async parameters => {
	const count = await List.countDocuments(parameters).exec();
	if (count === 0) return;
	const lists = await List.find(parameters)
		.populate('creator')
		.limit(1)
		.skip(Math.floor(Math.random() * count))
		.exec();
	return lists[0];
};

exports.getScore = list => {
	//((upvotes / (upvotes + downvotes)) + (skips / plays)) / 2
	//(upvote ratio in regards to total votes + skip ratio in regards to plays) / 2
	if (list.votes && list.plays) {
		const upvotes = list.votes.filter(vote => vote.vote > 0);
		const voteRatio = upvotes.length / list.votes.length;
		const score = (voteRatio + (list.plays - list.skips) / list.plays) / 2;
		return score ? score : 0;
	}
	return 0;
};
