const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/:type/:folder', ({
  params
}, res, next) => {
  fs.readdir(path.resolve(`${params.type}/${params.folder}`), (err, files) => {
    res.json(files.sort((file1, file2) => file1.substring(file1.indexOf('.') - 2) - file2.substring(file2.indexOf('.') - 2)));
  });
});

module.exports = router;