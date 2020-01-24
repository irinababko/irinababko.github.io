const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const svgSprite = require('gulp-svg-sprite');

var config = {
    shape: {
        dimension: {    
            maxWidth: 500,
            maxHeight: 500
        },
        spacing: {       
            padding: 0
        }
    },
    mode: {
        symbol: {
            dest : '.'
        }
    }
};

gulp.task('svg-sprite', function (cb) {
    return gulp.src('svg-separate/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('sprites'));
});
 
gulp.task('default', function () {
    gulp.src('./css')
        .pipe(gcmq())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('autoprefixer', () =>
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 40 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/'))
);

gulp.task('webserver', function() {
    gulp.src('./')
      .pipe(server({
        livereload: true,
        open: true
      }));
  });  

gulp.task('sass', function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('./dist/'))    
});

gulp.task('sass:watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],['sass']);

}); 

gulp.task('default', ['sass:watch', 'webserver', 'autoprefixer']);