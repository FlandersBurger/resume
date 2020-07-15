var Post = require('../../models/post');
var router = require('express').Router();
var redis = require('../../redis');
var websockets = require('../../websockets');

router.get('/', function (req, res, next) {
  Post.find()
  .populate('poster', 'username')
  .sort('-date')
  .exec(function(err, posts) {
    if (err) { return next(err); }
    res.json(posts);
  });
});

router.get('/:id', function (req, res, next) {
  Post.findOne({_id: req.params.id})
  .populate('poster', 'username')
  .exec(function (err, post) {
    if (err) { return next(err); }
    res.json(post);
  });
});


router.post('/', function (req, res, next) {
  var post = new Post({body: req.body.body});
  post.poster = req.auth.userid;

  post.save(function (err, post) {
    if (err) { return next(err); }
    redis.publish('new_post', post);
    res.status(201).json(post);
  });
});

redis.subscribe('new_post', function (post) {
  websockets.broadcast('new_post', post);
});

module.exports = router;
