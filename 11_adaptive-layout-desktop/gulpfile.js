const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const gcmq = require('gulp-group-css-media-queries');
const gulpStylelint = require('gulp-stylelint');
const shorthand = require('gulp-shorthand');
const svgSprite = require('gulp-svg-sprite');
const cleanCSS = require('gulp-clean-css');

function svg() {
  return gulp.src('./img-src/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg" //sprite file name
        }
      },
    }))
    .pipe(gulp.dest('./img/svg/'));
}

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 5 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } }))
    // .pipe(shorthand())
    .pipe(gcmq())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

function clean() {
  return del('./css');
}

let dev = gulp.series(clean, style, watch);

exports.clean = clean;
exports.style = style;
exports.watch = watch;
exports.default = dev;
exports.svg = svg;
