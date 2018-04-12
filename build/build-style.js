/*
 * @Author: oppo.chenhang 
 * @Date: 2018-04-12 08:25:08 
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-04-12 08:36:52
 * @Desc Gulp脚本，完成相应任务
 */

gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

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