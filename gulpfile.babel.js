const gulp = require("gulp");
const fs = require("fs");

fs.readdirSync(__dirname + "/gulp").forEach((task) => {
  require("./gulp/" + task);
});

gulp.task("watch", gulp.parallel(["watch:js", "watch:css", "watch:json"]));
gulp.task("dev", gulp.parallel(["watch", "dev:server"]));

gulp.task("build", gulp.parallel(["css", "js"]));
