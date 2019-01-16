var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');


//development


gulp.task('sass', function(){
    return gulp.src
    ('assets/scss/*.scss')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
      })) // Converts Sass to CSS with gulp-sass
    .on ('error' , console.error.bind(console))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(sourcemaps.write( './') )
    .pipe(browserSync.stream());
});

//scripts
gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});


gulp.task('images', function() {
  return gulp.src('assets/images/**')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]})
]))
  .pipe(gulp.dest('dist/images/'));
});


gulp.task('serve',  gulp.series('sass', function() {
   browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        // Change proxy to url
        proxy: 'https://hejtiger-framework.dev.cc',
        browser: ['firefox'],
        injectChanges: true,
        https: true
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
 }));

var autoprefixerOptions = {
  browsers: ['last 2 versions'],
  cascade: false
};

// Watch folder for changes
gulp.task('watch', function (){
  gulp.watch('assets/scss/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/*.js', gulp.series('scripts'));
  gulp.watch('assets/images/**', gulp.series('images'));
  gulp.watch('*.php').on('change', browserSync.reload);
});

// Basic Gulp task syntax

gulp.task('default',
  gulp.series('images', 'scripts', 'sass', gulp.parallel('serve', 'watch'))
  );

gulp.task('clean:dist', function() {
  return del('dist');
});