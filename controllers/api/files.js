var router = require('express').Router();
var path = require('path');
var fs = require('fs');

router.get('/images/:folder', function (req, res, next) {
  fs.readdir(path.resolve('images/' + req.params.folder), function (err, files) {
    res.json(files.sort(function(file1, file2) {
      return file1.substring(file1.indexOf('.') - 2) - file2.substring(file2.indexOf('.') - 2);
    }));
  });
});

module.exports = router;
