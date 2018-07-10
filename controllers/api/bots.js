var router = require('express').Router();
var mongoose = require('mongoose');

var config = require('../../config');

var List = require('../../models/list');

router.get('/lists/:id', function (req, res, next) {
  if (req.params.id === '5ae15f14b5f7883ff0497339') {
    List.find().populate('creator').exec(function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  } else {
    List.find({
      creator: req.params.id
    }).populate('creator').exec(function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }
});

router.put('/lists', function (req, res, next) {
  List.findByIdAndUpdate(req.body._id ? req.body._id : new mongoose.Types.ObjectId(), req.body, { new: true, upsert: true }, function(err, list) {
    if (err) return next(err);
    res.json(list);
  });
});

router.delete('/lists/:id', function (req, res, next) {
  List.findByIdAndRemove(null, function(err, list) {
    if (err) return next(err);
    res.sendStatus(200);
  });
});

module.exports = router;
