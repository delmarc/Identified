var gulp = require('gulp');
var open = require("gulp-open");
var config = require('../config');

gulp.task('open', ['build'], function() {

	var options = {
		url: "http://localhost:" + config.port
	};

	return gulp.src("./index.html").pipe(open("", options));
});
