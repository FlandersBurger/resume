var router = require('express').Router();
var path = require('path');
var fs = require('fs');

router.get('/images/:folder', function (req, res, next) {
  fs.readdir(path.resolve('images/' + req.params.folder), function (err, files) {
    res.json(files);
  });
});

module.exports = router;
