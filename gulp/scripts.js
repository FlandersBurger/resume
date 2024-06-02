/*jslint esversion: 8*/
const gulp = require("gulp");

const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const ngAnnotate = require("gulp-ng-annotate");
const uglify = require("gulp-terser");
const jsonminify = require("gulp-jsonminify");
const babel = require("gulp-babel");

gulp.task("js", () =>
  gulp
    .src(["ng/prototypes.js", "ng/module.js", "ng/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(ngAnnotate())
    .pipe(
      uglify({
        mangle: false,
        ecma: 10,
      })
    )
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets"))
    .on("error", onError)
);

gulp.task("resources", () =>
  gulp
    .src(["resources/ui-bootstrap-tpls-2.5.0.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("ui-bootstrap-tpls-2.5.0.min.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("resources"))
    .on("error", onError)
);

gulp.task(
  "watch:js",
  gulp.series(["js"], () => gulp.watch(["prototypes.js", "ng/**/*.js"], gulp.series(["js"])))
);

gulp.task("json", () => gulp.src(["data/*.json"]).pipe(jsonminify()).pipe(gulp.dest("assets")));

gulp.task(
  "watch:json",
  gulp.series(["json"], () => gulp.watch("data/*.json", gulp.series(["json"])))
);

const onError = (err) => {
  console.log(err);
  this.emit("end");
};
