const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const connect = require("gulp-connect");

gulp.task("dev:server", () => {
  nodemon({
    script: "src/server.ts",
    ext: "js ts",
    ignore: ["ng/*", "gulp/*", "assets/*"],
  });
});
