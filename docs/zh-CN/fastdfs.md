# FastDFS文件服务器在Centos上部署文档V1.0_20180509

---

## 环境准备

操作系统： CentOS6.x
硬盘大小： > 200G
CPU: 4
内存：8G

## 安装准备

在安装FastDFS以及Nginx前，请确保gcc、 gcc-c++、libstdc++-devel、 make等依赖库和工具已安装

    yum -y install gcc gcc-c++ libstdc++-devel


## 单机安装FastDFS和Nginx

### 安装libfastcommon类库

安装FastDFS必须先安装libfastcommon类库，否则会报错，安装直接根据如下步骤安装即可
1. 下载依赖包
    
    wget https://github.com/happyfish100/libfastcommon/archive/master.zip

2. 使用unzip解压压缩包

    unzip master.zip (master.zip为下载libfastcommon文件名)

3. 进入解压后的目录libfastcommon-master

    cd libfastcommon-master

4. 使用make命令编译

    ./make.sh

5. 使用make install命令安装

    ./make.sh install

等待安装完成，这样libfastcommon-master就安装完成了

接下来安装FastDFS

### 安装FastDFS

    # wget https://github.com/happyfish100/fastdfs/archive/master.tar.gz
    # tar -zxvf master.tar.gz
    # cd fastdfs-master
    # ./make.sh
    # ./make.sh install

安装完毕后，进入/usr/bin目录下, 可以看到fdfs开头的命令
可以通过这些命令启动fastdfs, 启动之前需要先配置FastDFS

### 配置FastDFS

所有的配置文件都在/etc/fdfs目录下，tracker需要配置tracker.conf文件，storage需要配置storage.conf配置文件

首先进入/etc/fdfs

    # cd /etc/fdfs
    # cp tracker.conf.sample tracker.conf

#### 配置tracker

    # vim tracker.conf

  一般只需要修改以下几个参数即可：

    #启用配置文件
    disabled=false
    #设置tracker的端口号
    port=22122
    #设置tracker的数据文件和日志目录（需手动创建）
    base_path=/var/fastdfs/tracker
    #设置http端口号
    http.server_port=9090

  启动tracker

    # /usr/bin/fdfs_trackerd /etc/fdfs/tracker.conf start

  启动完成后，查看端口22122是否成功监听tracker, 确认是否启动成功

    # netstat -unltp | grep fdfs

    tcp        0      0 0.0.0.0:22122               0.0.0.0:*                   LISTEN      29919/fdfs_trackerd 

  也可以查看fastdfs日志查看是否启动成功

    # cat /var/fastdfs/tracker/logs/trackerd.log

  如果日志中有启动信息且无报错，证明启动成功
  这样tracker配置就完成了，并成功启动tracker服务

#### 配置storage

    # cd /etc/fdfs
    # cp stroage.conf.sample stroage.conf
    # vim stroage.conf

  修改一下几个选项

    #启用配置文件
    disabled=false
    #组名，根据实际情况修改
    group_name=group1
    #设置storage的端口号
    port=23000
    #设置storage的日志目录（需手动创建）
    base_path=/var/fastdfs/storage
    #存储路径个数，需要和store_path个数匹配
    store_path_count=1
    #存储路径
    store_path0=/var/fastdfs/storage
    #tracker服务器的IP地址和端口号
    tracker_server=192.168.12.193:22122 (由于单机配置，tracker__server一般为本机服务器IP，端口为22122)
    #设置http端口号
    http.server_port=8080

  保存文件，启动storage服务

    # /usr/bin/fdfs_storaged /etc/fdfs/storage.conf start

  与查看tracker服务类似，检查storage服务是否成功启动

    # netstat -unltp | grep fdfs

    tcp        0      0 0.0.0.0:22122               0.0.0.0:*                   LISTEN      29919/fdfs_trackerd 
    tcp        0      0 0.0.0.0:23000               0.0.0.0:*                   LISTEN      30265/fdfs_storaged

  或者查看fastdfs日志判断是否成功启动

    # cat /var/fastdfs/storage/logs/storage.log

  如果可以看出storage会根据配置文件的设置自动创建多级存储目录，则表示启动成功

#### 验证storage服务是否已成功登记到tracker服务上

    # /usr/bin/fdfs_monitor /etc/fdfs/storage.conf

  如果出现ip_addr = <IP> Active, 则表明storage服务器已经登记到tracker服务器~  

  Storage 1:
        id = 192.168.12.193
        ip_addr = 192.168.12.193  ACTIVE

  这样，tracker, storage等服务都已成功配置并启动


### 安装nginx和fastdfs-nginx-module

下载fastdfs-nginx-module

    # wget https://github.com/happyfish100/fastdfs-nginx-module/archive/master.zip
    # unzip master.zip

解压以后可以看到fastdfs-nginx-module-master目录


### 安装nginx

首先安装nginx依赖文件

    yum -y install pcre-devel
    yum -y install zlib-devel

下载nginx, nginx版本可在此网站 https://nginx.org/en/download.html
nginx配置按需求自行添加，此处只添加了fastdfs-nginx-module-master

    # wget https://nginx.org/download/nginx-1.0.15.tar.gz
    # tar -zvxf nginx-1.0.15.tar.gz
    # cd nginx-1.0.15
    # ./configure --add-module=../fastdfs-nginx-module-master/src/
    # make
    # make install

安装成功，查看nginx版本信息

    # /usr/local/nginx/sbin/nginx -V

成功显示版本信息，则表示安装成功


### 配置nginx和fastdfs-nginx-module

#### 配置fastdfs-nginx-module

进入fastdfs-nginx-module-master的src目录，

将`mod_fastdfs.conf`配置文件拷贝到/etc/fdfs中, 进入/etc/fdfs目录, 修改mod_fastdfs.conf文件

    # cd /etc/fdfs
    # vim mod_fastdfs.conf

修改以下几项

    # FastDFS tracker_server can ocur more than once, and tracker_server format is
    #  "host:port", host can be hostname or ip address
    # valid only when load_fdfs_parameters_from_tracker is true
    tracker_server=<IP_ADDRESS>:22122

    # the port of the local storage server
    # the default value is 23000
    storage_server_port=23000

    # the group name of the local storage server
    group_name=group1

    # if the url / uri including the group name
    # set to false when uri like /M00/00/00/xxx
    # set to true when uri like ${group_name}/M00/00/00/xxx, such as group1/M00/xxx
    # default value is false
    url_have_group_name = true

    # path(disk or mount point) count, default value is 1
    # must same as storage.conf
    store_path_count=1

    # store_path#, based 0, if store_path0 not exists, it's value is base_path
    # the paths must be exist
    # must same as storage.conf
    store_path0=/var/fastdfs/storage

配置完成后保存文件，进入FastDFS目录中的conf目录， 本文档中的目录为`~/fastdfs-master/`
将conf目录中的还没有使用的配置文件拷贝到/etc/fdfs中

    # cp anti-steal.jpg http.conf mime.types /etc/fdfs/

#### 配置nginx

进入nginx配置文件目录

    # cd /usr/local/nginx/conf
    # cp nginx.conf.default nginx.conf
    # vim nginx.conf

修改文件服务器端口为 19080 端口自定，如果开启防火墙，需要开启此端口

    location /group1/M00 {
      root /var/fastdfs/storage/;
      ngx_fastdfs_module;
    }

由于配置了group1/M00的访问，我们需要建立一个group1目录，并建立M00到data的软连接

    # mkdir -p /var/fastdfs/storage/data/group1
    # ln -s /var/fastdfs/storage/data /var/fastdfs/storage/data/group1/M00


### 测试

#### 启动nginx并配置fastdfs client.conf配置文件

启动nginx，并上传测试文件是否能够上传且显示

    # /usr/local/nginx/sbin/nginx

访问http://<YOUR_IP>:<YOUR_PORT>访问Nginx, 可以成功看到nginx欢迎页面，表示nginx启动成功，否则查看nginx日志查看为何nginx无法启动成功

配置fastdfs client.conf

    # cd /etc/fdfs
    # cp client.conf.sample client.conf
    # vim client.conf

指定storage的目录 （bash_path）以及tracker服务器地址等信息

    network_timeout=60

    # the base path to store log files
    base_path=/srv/fastdfs/storage

    # tracker_server can ocur more than once, and tracker_server format is
    #  "host:port", host can be hostname or ip address
    tracker_server=<YOUR_IP_ADDRESS>:22122


    #HTTP settings
    http.tracker_server_port=19080

#### 上传文件测试

    # /usr/bin/fdfs_test /etc/fdfs/client.conf upload /etc/fdfs/anti-steal.jpg

成功返回文件上传信息，则表示上传成功，

#### 验证

进入/var/fastdfs/storage中的/group1/M00/00/00目录下的文件，成功看到上传文件，并根据日志中返回的路径在浏览器中查看

    http://<IP_ADDRESS>:<IP_PORT>/group1/M00/00/00/rBcfaVlZx9SAO-ARAACdQEcIbGo827.png

可以成功看到上传图片，则表示fastdfs以及nginx安装成功

## 安装php

### yum安装php

    yum install php

### 安装php组件

    yum install php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt libmcrypt-devel php-fpm

### 启动php-fpm

    /etc/rc.d/init.d/php-fpm start  #启动php-fpm
    chkconfig php-fpm on  #设置开机启动

### 配置nginx支持php

    location ~ \.php$ {
      root          html;
      fastcgi_pass   127.0.0.1:9000;
      fastcgi_index  index.php;
      fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
      include       fastcgi_params;
    }

### 配置php

    vim /etc/php.ini #编辑


    date.timezone=PRC  #在946行 把前面的分号去掉，改为date.timezone = PRC

    disable_functions=passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_open,proc_get_status,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server,escapeshellcmd,dll,popen,disk_free_space,checkdnsrr,getservbyname,getservbyport,disk_total_space,posix_ctermid,posix_get_last_error,posix_getcwd,posix_getegid,posix_geteuid,posix_getgid,posix_getgrgid,posix_getgrnam,posix_getgroups,posix_getlogin,posix_getpgid,posix_getpgrp,posix_getpid,posix_getppid,posix_getpwnam,posix_getpwuid,posix_getrlimit,posix_getsid,posix_getuid,posix_isatty,posix_kill,posix_mkfifo,posix_setegid,posix_seteuid,posix_setgid,posix_setpgid,posix_setsid,posix_setuid,posix_strerror,posix_times,posix_ttyname,posix_uname #在386行 列出PHP可以禁用的函数

    expose_php=Off #在432行 禁止显示php版本的信息
    magic_quotes_gpc=On #在745行 打开magic_quotes_gpc来防止SQL注入

    :wq
    保存退出

### 配置php-fpm

    # cp /etc/php-fpm.d/www.conf   /etc/php-fpm.d/www.confbak #备份原来的配置文件
    # vi /etc/php-fpm.d/www.conf   #编辑
    # user = nginx    #修改用户为nginx
    # group = nginx   #修改组为nginx

    :wq
    保存退出，重启nginx和php-fpm

    # /usr/local/nginx/sbin/nginx -s reload
    # /etc/rc.d/init.d/php-fpm  restart  #重启php-fpm

### 测试nginx和php是否配置成功

    # cd /usr/local/nginx/html/
    # vim index.php

    <?php
      phpinfo();
    ?>

    :wq
    设置网站根目录权限，如果设置目录为其他，则将下列目录修改成对应目录

    # chown nginx.nginx /usr/share/nginx/html/ -R  #设置目录所有者
    # chmod 700  /usr/share/nginx/html/ -R   #设置目录权限

    在客户端输入服务器IP，可以看到相关信息，则表示php配置成功


## 安装php fastdfs扩展

## 安装membercache以及php membercache扩展

## 安装freetds 以及php freetds扩展
