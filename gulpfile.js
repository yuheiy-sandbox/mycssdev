const gulp = require('gulp')

const css = () => {
  const sass = require('gulp-sass')
  const postcss = require('gulp-postcss')

  return gulp.src('test.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      require('postcss-pseudo-class-any-link'),
      require('postcss-selector-matches'),
      require('postcss-selector-not'),
    ]))
    .pipe(gulp.dest('.'))
}

exports.css = css
