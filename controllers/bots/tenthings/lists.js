const List = require('../../../models/tenthings/list')();

exports.getRandomList = async parameters => {
	const count = await List.countDocuments(parameters).exec();
	if (count === 0) return;
	const lists = await List.find(parameters)
		.select('name values')
		.populate('creator')
		.limit(1)
		.lean()
		.skip(Math.floor(Math.random() * count))
		.exec();
	return lists[0];
};
