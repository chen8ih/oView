/*
 * @Author: chenhang 
 * @Date: 2018-04-12 08:25:08 
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-08 08:22:33
 * @Desc Gulp脚本，完成相应任务
 */

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

//编译less
gulp.task('css', function(){
  gulp.src('../examples/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('oview.css'))
    .pipe(gulp.dest('../static/css'));
});

//拷贝字体文件
gulp.task('fonts', function () {
  gulp.src([
    '../examples/styles/common/iconfont/fonts/*.*',
    '../examples/styles/common/fonts/*.*'
    ]).pipe(gulp.dest('../static/css/fonts'));
});

gulp.task('default', ['css']);