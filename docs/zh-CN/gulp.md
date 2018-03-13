## Gulp

---

### 简介

Gulp简单来说就是一个增强工作流程的自动化工具，具有易于使用，构建快速，丰富的插件，易于学习等特点，希望通过下面的教程能够让你安装完Gulp并能够成功运行一个任务脚本


### 安装node

Gulp是运行在node环境中的，所以需要优先安装node，安装教程参考 <code><a href="./node">资料-node</a></code> ，如果已安装node请忽略

### 安装gulp

在node中我们已经学习了如何用npm去管理我们的依赖包，所以我们可以使用npm去安装gulp. 首先我们打开终端，输入一下命令，全局安装gulp

      npm install -g gulp

如果报错，可能是权限不够，以macos为例，可以使用如下命令

      sudo npm install -g gulp

安装完成够后，输入命令

      gulp -v

如果成功显示版本号，则表示安装成功

接下来， 我们进入我们的项目目录, 并在项目中安装gulp

      cd project
      npm install --save-dev gulp

<span class="ovu-attention-key">--save-dev</span>表示更新package.json中的<span class="ovu-attention-key">devDependencies</span>, 表明项目需要依赖gulp

<span class="ovu-attention-key">Dependencies</span>可以向其他参与项目的人指明项目在开发环境和生产环境中的node模块依懒关系，想要更加深入的了解它可以看看[package.json](http://javascript.ruanyifeng.com/nodejs/packagejson.html)文档。

### 新建gulpfile文件，运行gulp

在项目中安装好gulp之后，我们需要告诉他要为我们执行哪些任务？首先我们需要整理出我们的项目需要哪些项目，如果如下列表：

* 编译less文件
* 合并javascript文件
* 压缩并重命名合并后的javascript文件

#### 安装依赖

npm install --save-dev gulp-less gulp-concat gulp-uglify gulp-rename

* gulp-less 编译less文件所需插件
* gulp-concat 合并js文件插件
* gulp-uglify 压缩js文件插件
* gulp-rename 重命名js文件插件

#### 新建gulpfile文件

在项目根目录新建gulpfile.js, gulp只有五个方法： <span class="ovu-attention-key">task</span>、 <span class="ovu-attention-key">run</span>、<span class="ovu-attention-key">watch</span>、
<span class="ovu-attention-key">src</span>、
<span class="ovu-attention-key">dest</span>

#### 编写任务代码

<span class="ovu-props-title">gulpfile.js</span>

```js
// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var sass = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 编译less
gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('less', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('less', 'scripts');
    });
});

```


现在分段解释这段代码

##### 引入组件
```js
// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var sass = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
```

这一步，我们引入了核心模块gulp以及gulp的相关插件，然后创建了less、scripts两个任务。

* less 编译less文件为css
* scripts 合并js文件，压缩并重命名js文件

##### less任务

```js
gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});
```
less任务会检测<span class="ovu-attention-key">less/</span>目录下的所有less文件，编译后保存至<span class="ovu-attention-key">css/</span>目录中

##### scripts任务

```js
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist'));
});
```
scripts会检测<span class="ovu-attention-key">js/</span>目录下所有的js文件，合并为main.js并输出到<span class="ovu-attention-key">dist/</span>目录中，然后压缩main.js，并重命名为main.min.js，再输出到<span class="ovu-attention-key">dist/</span>目录中。

<em>*号符表示匹配所有的js文件，如果不需要可以按照如下代码进行有选择性的合并文件</em>

```js
gulp.src(['a.js', 'b.js'])
```

##### default任务

```js
gulp.task('default', function(){
    gulp.run('less', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('less', 'scripts');
    });
});
```

我们一般会创建了一个基于其他任务的default任务。使用.run()方法关联和运行我们上面定义的任务，使用.watch()方法去监听指定目录的文件变化，当有文件变化时，会运行回调定义的其他任务。

现在，回到命令行，我们输入gulp, 就会运行我们的默认gulp任务了

      gulp

当然，使用

      gulp default

与直接使用 _gulp_ 命令是同一个意思

我们也可以直接输入任务名，来执行我们指定的任务

      gulp less

这个命令就只会执行less任务了：）









