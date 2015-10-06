/*
 * GULP FILE
 * Projet ProxiMiam
 * V 1.0.0
 */

// ********************* MODULES  ********************* 

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// ********************* TASKS ********************* 

// Default task
gulp.task('default', function() {
	console.log('Bienvenue sur le projet !');
});

// Test the uglify plugin
gulp.task('testMinify', function () {
   gulp.src('src/client/**/*.js')
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'))
});

// Compile typescript files
gulp.task('compileTS', function () {
   gulp.src('src/client/**/*.js')
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'))
});

// Watch and build typescript files
gulp.task('watchTS', function () {
   	gulp.watch('src/client/**/*.ts', ['compileTS']);
   	watcher.on('change', function (event) {
   		console.log('Event type: ' + event.type); // added, changed, or deleted
   		console.log('Event path: ' + event.path); // The path of the modified file
	});
});

// Build task : call other task => Asynchrone !
gulp.task('build', ['default', 'testMinify']);


