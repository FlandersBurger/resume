var router = require('express').Router();

var config = require('../../config');

var List = require('../../models/list');

router.get('/lists', function (req, res, next) {
  List.find().exec(function(err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

module.exports = router;
