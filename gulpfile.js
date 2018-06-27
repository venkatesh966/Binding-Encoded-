var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var sourcePath = "ArrayPrograms/**/*.js";
var destPath = "bundle"


gulp.task('uglify',function(){
    gulp.src(sourcePath)
    .pipe(uglify())
    .pipe(concat('bindeddata.js'))
    .pipe(gulp.dest(destPath))
});



