const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

//编译less
gulp.task('css', function(){
  gulp.src('../src/theme-defaults/widget/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(gulp.dest('../lib/theme-defaults/'));
})

gulp.task('default', ['css']);