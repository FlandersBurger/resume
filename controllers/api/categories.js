var Category = require('../../models/category')
var router = require('express').Router()
var pubsub = require('../../pubsub')
var websockets = require('../../websockets')

router.get('/', function (req, res, next) {
  Category.find()
  .sort('+name')
  .exec(function(err, categories) {
    if (err) { return next(err) }
    res.json(categories)
  })
})

router.get('/:category', function (req, res, next) {
  Category.findOne({ name: req.params.category })
  .exec(function(err, category) {
    if (err) { return next(err) }
    res.json(category.tasks)
  })
})

router.post('/', function (req, res, next) {
  var category = new Category({name: req.body.category, creator: req.auth.userid})
  category.save(function (err, user) {
    if (err) {
      throw next(err)
    }
    res.json(category)
  })
})

router.post('/:category/tasks', function (req, res, next) {
  Category.findOne({ name: req.params.category })
  .exec(function(err, category) {
    if (err) { return next(err) }
    var found = false
    for (var i = 0; i < category.tasks.length; i++) {
      if (req.body.task === category.tasks[i].name) {
        found = true
        break
      }
    }
    if (!found) {
      category.tasks.push({ name: req.body.task })
      category.save(function (err, category) {
        if (err) {
          throw next(err)
        }
        res.sendStatus(201)
      })
    }
  })
})

module.exports = router
