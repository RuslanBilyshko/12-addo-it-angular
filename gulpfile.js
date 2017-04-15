var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');
var server = require('gulp-server-livereload');

var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var miniCss = require('gulp-minify-css');

var path = {
  build: {
    css: 'src/app/css/'
  },
  src: {
    style: 'src/app/scss/main.scss'
  },
  clean: './app/build'
};

gulp.task('style', function () {
    gulp.src(path.src.style)
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(miniCss())
    .pipe(gulp.dest(path.build.css));
});


gulp.task('clean', function (cb) {
    return del(['src/build/**/*'], cb);
});

gulp.task('usemin', function () {
    return gulp.src('src/app/*.html')
        .pipe(usemin({
            html: [minifyHtml({
                empty: true,
                conditionals: true
            })],
            js: ['concat', rev()]
        }))
        .pipe(gulp.dest('src/build'));
});

gulp.task('build', ['clean'], function () {
    gulp.run('usemin');
});

gulp.task('watcher', function () {
    gulp.watch(['src/app/**/*.js', 'src/app/*.html'], ['build']);
    gulp.watch(['src/app/scss/**/*.scss'], ['style']);
});

gulp.task('webserver', function () {
    gulp.src('src/app')
        .pipe(server({
            livereload: true,
            open: true,
            port: 8085
        }));
});

gulp.task('default', function () {
  gulp.run('style', 'watcher');
});


