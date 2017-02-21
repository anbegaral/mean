var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');

gulp.task('default', ['watch']);


gulp.task('watch', ['browser-sync', 'build-sass'], function(){
    gulp.watch('app/**/*.js',['jshint']);
    gulp.watch('app/**/*.scss',['build-sass']);
    gulp.watch('app/**/*.js', browserSync.reload);
    
});

gulp.task('jshint', function(){
    return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-sass', function(){
    return gulp.src('app/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browser-sync', function(){
browserSync.init({
    server:{
        baseDir: './'
    }
});
});

gulp.task('useref', function(){
    return gulp.src('app/**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});