const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const connect = require("gulp-connect");

gulp.task("dev:server", () => {
  nodemon({
    script: "dist/server.js",
    ext: "js ts",
    ignore: ["ng/*", "gulp/*", "assets/*"],
  });
});
