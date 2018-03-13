## Npm

### npm简介

npm是nodejs的包管理工具，能解决nodejs代码部署中的很多问题。
目前的nodejs已经集成了npm,所以安装完nodejs,npm也一起安装好了
在命令行中输入“npm -v”来测试是否安装成功，命令行如下，如果出现版本提示则表示安装成功

      npm -v
      5.6.0

npm升级请参考node

### 使用npm命令安装模块

      npm install <Module Name>

#### 全局安装与本地安装

npm 的包氛围本地安装（local）、全局安装（global）,安装命令分别如下：

      npm install express     # 本地安装
      npm install -g express  # 全局安装

##### 本地安装

> 本地安装包一般会出现在项目目录下的<code>./node_module</code>下, 如果没有node_module文件夹，在执行命令的目录下生成node_module目录

> 可以通过require命令引入安装包

##### 全局安装

> 全局安装包一般放在本机node的安装目录或者/usr/local下

> 全局安装包可以直接在命令行中使用

#### 查看安装信息

      npm list -g

    如果需要查看全局安装模块的版本号。可以使用命令如下：

      npm list vue-cli

#### 使用package.json

package.json位于模块的目录下，用于定义包的属性

属性说明

* _name_              包名
* _version_           包的版本号
* _description_       包的描述
* _homepage_          包的官网url
* _author_            包的作者姓名
* _contributors       包的其他贡献者姓名
* _dependencies       依赖包列表 
* _repository         包代码管理的地方，如git
* _main_              main字段指定了程序的主入口文件
* _keywords_          关键字


#### 卸载模块

      npm uninstall express

      卸载全局依赖包

#### 更新模块

     npm update express

#### 搜索模块
      
      npm search express

#### 创建模块

创建模块，package.json文件是必不可少的，可以使用npm命令生成package.json文件

      npm init


#### npm常用命令汇总

* npm 提供了很多命令，例如npm install 和 npm publish，可以通过npm help查看所有命令
* 使用npm help <command>可以查看某条命令的详细帮助
* 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本
