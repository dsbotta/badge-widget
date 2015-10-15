'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


gulp.task('concatScripts', function() {
	gulp.src(['public/js/jquery.js', 'public/bootstrap/js/bootstrap.js', 'public/js/main.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('minifyScripts', function() {
	gulp.src('public/js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('default', ['concatScripts', 'minifyScripts'], function() {
	console.log('...');
});