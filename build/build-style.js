const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

//编译less
gulp.task('css', function(){
  gulp.src(['../packages/theme-defaults/*.less', '!../src/theme-defaults/variable.less'])
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(gulp.dest('../lib/theme-defaults/'));
})

//拷贝金泰文件
gulp.task('assets', function () {
  gulp.src('../packages/theme-defaults/assets/*.*')
    .pipe(gulp.dest('../lib/theme-defaults/assets'));
});

gulp.task('default', ['css', 'assets']);