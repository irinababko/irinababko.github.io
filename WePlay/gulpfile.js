const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');
const replace = require('gulp-replace');


config = {
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
        view: {
            bust: false,
            render: {
                scss: true
            },
            prefix: "%%svg-%s"
        },
        symbol: false
    }
};

gulp.task('svg-sprite', function () {
    return gulp.src('svg-separate/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('sprites'));
});

gulp.task('webserver', function() {
    gulp.src('./')
      .pipe(server({
        livereload: true,
        open: true
      }));
  });

gulp.task('sass', ['svg-sprite'], function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(autoprefixer({
          cascade: false
        }))
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(replace('svg/sprite.view.svg', '../sprites/view/svg/sprite.view.svg'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('sass:watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],['sass']);

});

gulp.task('default', ['sass:watch', 'webserver', 'svg-sprite', 'sass']);
