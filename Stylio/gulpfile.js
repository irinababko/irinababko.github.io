var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('./css/'))
    
});

gulp.task('watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],[sass]);

});

gulp.task('default', ['watch']);