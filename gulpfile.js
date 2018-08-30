'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
	gulp.src('./assets/sass/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('default', function() {

	browserSync.init({
        proxy: "localhost:8888/"
    });

	  gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch("./**/*.php").on('change', browserSync.reload);
    gulp.watch("./assets/**/*.*").on('change', browserSync.reload);
});
