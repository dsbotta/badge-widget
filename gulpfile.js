'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	maps = require('gulp-sourcemaps');

gulp.task('concatStyles', function() {
	return gulp.src(['public/bootstrap/css/bootstrap.min.css', 'public/css/style.css'])
	.pipe(maps.init())
	.pipe(concat('main.css'))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('public/css'));
});

gulp.task('concatScripts', function() {
	return gulp.src(['public/js/jquery.js', 'public/bootstrap/js/bootstrap.js', 'public/js/main.js'])
	.pipe(maps.init())
	.pipe(concat('app.js'))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
	return gulp.src('public/js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('public/js'));
});

gulp.task('watchScripts', function() {
	gulp.watch(['public/js/jquery.js', 'public/bootstrap/js/bootstrap.js', 'public/js/main.js'], ['build']);
});

gulp.task('watchStyles', function() {
	gulp.watch(['public/css/style.css', 'public/bootstrap/css/bootstrap.min.css', 'custom-modules/**/*.js'], ['build']);
});

gulp.task('build', ['minifyScripts', 'concatStyles'], function() {
	return gulp.src(['public/js/app.min.js', 'public/css/main.css', 'public/bootstrap/**', 'templates/**', 'app.js', 'package.json', 'custom-modules/**'], {base: './'} )
			.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);


