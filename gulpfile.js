/*
 * GULP FILE
 * Projet ProxiMiam
 * V1.0.0
 */

// ********************* LOAD MODULES ********************* 
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
//var sourcemaps = require('gulp-sourcemaps'); // utilité ?
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber'); // Ne pas s'arrêter en cas d'erreurs
var taskListing = require('gulp-task-listing');
var nodemon = require('gulp-nodemon');
var util = require('gulp-util');

// ********************* GLOBAL VARS ********************* 
var reload = browserSync.reload;

var colors = util.colors;
var env = util.env;
var log = util.log;
var port = process.env.PORT || 7203;

// ********************* TASKS ********************* 

/**
 * List the available gulp tasks
 */
gulp.task('help', taskListing);

/*
 * Default task
 */
gulp.task('default', ['help']);

// Test the uglify plugin
gulp.task('testMinify', function () {
   	gulp.src('src/client/**/*.js')
   		.pipe(plumber())
      	.pipe(uglify())
      	.pipe(concat('app.js'))
      	.pipe(gulp.dest('build'))
});

// Compile typescript files
gulp.task('compileTS', function () {
	console.log('Compiling typescript ...');

	var tsResult = gulp.src('src/client/**/*.ts')
   						.pipe(plumber())
				        .pipe(
				        	ts({
				        		sortOutput: true,
				            	declaration: true,
				            	noExternalResolve: true
				    		})
				    	);

	return tsResult.js
            .pipe(concat('output.js'))
            .pipe(gulp.dest('built/local'))
            .pipe(livereload());
});

// Watch and build typescript files
gulp.task('watch', function () {

	// Typescript
   	var watcher = gulp.watch('src/client/**/*.ts', ['compileTS']);
   	watcher.on('change', logWatch);

   	// Css
	// var watcher = gulp.watch('src/client/**/*.css', ['compileCSS']);
   	// watcher.on('change', logWatch);

	//	util.beep();

    function logWatch(event) {
        log('*** File [' + event.path + '] was ' + colors.magenta(event.type) + ', running tasks...');

    }
});

/**
 * serve the dev environment, with debug, and with node inspector
 */
gulp.task('serve-dev-debug', function() {
    serve({
        mode: 'dev',
        debug: '--debug'
    });
});

/**
 * serve the dev environment
 */
gulp.task('serve-dev', function() {
    serve({
        mode: 'dev'
    });
});

/**
 * serve the build environment
 */
gulp.task('serve-build', function() {
    serve({
        mode: 'build'
    });
});


// ********************* FUNCTIONS ********************* 

/**
 * Start the node server using nodemon.
 * Optionally start the node debugging.
 * @param  {Object} args - debugging arguments
 * @return {Stream}
 *//*
function serve(args) {
    var options = {
        script: paths.server + 'app.js',
        delayTime: 1,
        env: {
            'NODE_ENV': args.mode,
            'PORT': port
        },
        watch: [paths.server]
    };

    var exec;
    if (args.debug) {
        log('Running node-inspector. Browse to http://localhost:8080/debug?port=5858');
        exec = require('child_process').exec;
        exec('node-inspector');
        options.nodeArgs = [args.debug + '=5858'];
    }

    return nodemon(options)
        .on('start', function() {
            startBrowserSync();
        })
        //.on('change', tasks)
        .on('restart', function() {
            log('restarted!');
            setTimeout(function () {
                browserSync.reload({ stream: false });
            }, 1000);
        });
}
*/
/**
 * Start BrowserSync
 *//*
function startBrowserSync() {
    if(!env.browserSync || browserSync.active) {
        return;
    }

    log('Starting BrowserSync on port ' + port);
    browserSync({
        proxy: 'localhost:' + port,
        port: 3000,*/
 //       files: [paths.client + '/**/*.*'],
 /*       ghostMode: { // these are the defaults t,f,t,t
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 5000
    });
}*/
