
//Gulp modules
var del = require("del");
var gulp = require("gulp");
var bower = require('gulp-bower');
var vinylPaths = require('vinyl-paths');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var deploy = require('gulp-gh-pages');

  
///////////////////////////////////////////////////////////////////////////
// config
//
///////////////////////////////////////////////////////////////////////////
var config = {
  bowerDir: './app/www/lib/'
};

///////////////////////////////////////////////////////////////////////////
// Clean all .js and .map (ignore lib directory)
//
///////////////////////////////////////////////////////////////////////////
gulp.task('ts-clean', function () {

  gulp.src(['app/**/*.js', '!app/www/lib/**/*'])
    .pipe(vinylPaths(del));

  gulp.src(['app/**/*.js.map', '!app/www/lib/**/*'])
    .pipe(vinylPaths(del));
});

///////////////////////////////////////////////////////////////////////////
// Transpiles typescript files
//
///////////////////////////////////////////////////////////////////////////
gulp.task('ts-build', ['bower'], function () {

  return gulp.src('app/**/*.ts', {base:'.'})
  .pipe(sourcemaps.init())
    .pipe(typescript({
      module: 'commonjs',
      target: 'ES5'
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
});

///////////////////////////////////////////////////////////////////////////
// bower task
//
///////////////////////////////////////////////////////////////////////////
gulp.task('bower', function() {

  return bower({directory: config.bowerDir}).pipe(
    gulp.dest(config.bowerDir));
});

///////////////////////////////////////////////////////////////////////////
// Default task
//
///////////////////////////////////////////////////////////////////////////
gulp.task('default', ['ts-build']);

gulp.task('deploy', function () {
  return gulp.src("./prod/**/*")
    .pipe(deploy({ 
      remoteUrl: "https://github.com/Nainoor/Nainoor.github.io.git",
      branch: "master"
    }))
});