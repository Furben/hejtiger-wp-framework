var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');


//development


gulp.task('sass', function(){
    return gulp.src
    ('assets/scss/*.scss')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
      })) // Converts Sass to CSS with gulp-sass
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

//scripts
gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('serve',  gulp.series('sass', function() {
   browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        // Change proxy to url
        proxy: 'https://hejtiger.dev.cc',
        injectChanges: true,
        https: true
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
 }));

var autoprefixerOptions = {
  browsers: ['last 2 versions']
};

// Watch folder for changes
gulp.task('watch', function (){
  gulp.watch('assets/scss/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/*.js', gulp.series('scripts'));
  gulp.watch('*.php').on('change', browserSync.reload);
});

// Basic Gulp task syntax

gulp.task('default',
  gulp.series('scripts', 'sass', gulp.parallel('serve', 'watch'))
  );

gulp.task('clean:dist', function() {
  return del('dist');
});