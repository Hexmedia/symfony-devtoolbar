const gulp = require("gulp");
const less = require("gulp-less");
const typescript = require("gulp-tsc");
const tslint = require("gulp-tslint");


gulp.task("tsc", function () {
    return gulp.src(['**/*.ts', '!node_modules/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('full'))
        .pipe(typescript())
        .pipe(gulp.dest('./dest/'));
});

gulp.task('tslint', function(){
    return gulp.src('test-environment/typescript/BrowserTest.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});