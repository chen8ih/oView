# axios

---

## 基本特性

axios是一个基于Promise用于浏览器和nodejs的HTTP客户端，它本身具有以下特性

- 从浏览器中创建XMLHttprequest
- 从nodejs发出的Http请求
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止CSRF/CSRF/XSRF

## 兼容性

支持现代浏览器以及IE9+

## 安装

    npm install axios

如果是使用cdn

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

## 基本用法

执行Get请求

    // 向具有指定ID的用户发起请求
    axios.get('user?ID=12345')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    // 通过params对象传递参数
    axios.get('/user', {
      params: {
        ID: '12345'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

执行Post请求

    axios.post('/user', {
      firstName: 'ax',
      lastName: 'ek'
    })
    .then((response) => {
      conosle.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

执行并发请求

    function getUserAccount () {
      return axios.get('/user/12345')
    }

    function getUserPermission () {
      return axios.get('/user/12345/permisssion')
    }

    axios.all([getUserAccount(), getUserPermission()])
      .then(axios.spread((acct, perms) => {
        // 两个请求已完成，返回结果按顺序分别存在与acct, perms
      }))

## API

### axios(config), axios(url, [config])

可以通过将相关配置传递给axios来进行请求

    let config = {
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'ax',
        lastName: 'ek'
      }
    }
    axios(config)

    axios('/user/12345')

### 请求方式别名

- axios.request(config)
- axios.get(url, [config])
- axios.post（url [，data [，config]]

当使用别名时， 不需要在config再次指定url, method, data等属性

### 并发请求

- axios.all(iterable)
- axios.spread(callback) //请求完成后

### 配置项

这些都是用于发出请求的可用配置选项，只有URL是必需的。如果未指定方法，则默认为GET

```js
    {
      // `url`是将用于请求的服务器URL
      url: '/user',
      // `method`是发出请求时使用的请求方法
      method: 'get', // 默认
      // `baseURL`将被添加到`url`前面，除非`url`是绝对的。
      // 可以方便地为 axios 的实例设置`baseURL`，以便将相对 URL 传递给该实例的方法。
      baseURL: 'https://some-domain.com/api/',
      // `transformRequest`允许在请求数据发送到服务器之前对其进行更改
      // 这只适用于请求方法'PUT'，'POST'和'PATCH'
      // 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream
      transformRequest: [function (data) {
        // 做任何你想要的数据转换
        return data;
      }],
      // `transformResponse`允许在 then / catch之前对响应数据进行更改
      transformResponse: [function (data) {
        // Do whatever you want to transform the data
        return data;
      }],
      // `headers`是要发送的自定义 headers
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      // `params`是要与请求一起发送的URL参数
      // 必须是纯对象或URLSearchParams对象
      params: {
        ID: 12345
      },
      // `paramsSerializer`是一个可选的函数，负责序列化`params`
      // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      // `data`是要作为请求主体发送的数据
      // 仅适用于请求方法“PUT”，“POST”和“PATCH”
      // 当没有设置`transformRequest`时，必须是以下类型之一：
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream
      data: {
        firstName: 'Fred'
      },
      // `timeout`指定请求超时之前的毫秒数。
      // 如果请求的时间超过'timeout'，请求将被中止。
      timeout: 1000,
      // `withCredentials`指示是否跨站点访问控制请求
      // should be made using credentials
      withCredentials: false, // default
      // `adapter'允许自定义处理请求，这使得测试更容易。
      // 返回一个promise并提供一个有效的响应（参见[response docs]（＃response-api））
      adapter: function (config) {
        /* ... */
      },
      // `auth'表示应该使用 HTTP 基本认证，并提供凭据。
      // 这将设置一个`Authorization'头，覆盖任何现有的`Authorization'自定义头，使用`headers`设置。
      auth: {
        username: 'janedoe',
        password: 's00pers3cret'
      },
      // “responseType”表示服务器将响应的数据类型
      // 包括 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json', // default
      //`xsrfCookieName`是要用作 xsrf 令牌的值的cookie的名称
      xsrfCookieName: 'XSRF-TOKEN', // default
      // `xsrfHeaderName`是携带xsrf令牌值的http头的名称
      xsrfHeaderName: 'X-XSRF-TOKEN', // default
      // `onUploadProgress`允许处理上传的进度事件
      onUploadProgress: function (progressEvent) {
        // 使用本地 progress 事件做任何你想要做的
      },
      // `onDownloadProgress`允许处理下载的进度事件
      onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
      },
      // `maxContentLength`定义允许的http响应内容的最大大小
      maxContentLength: 2000,
      // `validateStatus`定义是否解析或拒绝给定的promise
      // HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被
      // 拒绝。
      validateStatus: function (status) {
        return status >= 200 && status < 300; // default
      },
      // `maxRedirects`定义在node.js中要遵循的重定向的最大数量。
      // 如果设置为0，则不会遵循重定向。
      maxRedirects: 5, // 默认
      // `httpAgent`和`httpsAgent`用于定义在node.js中分别执行http和https请求时使用的自定义代理。
      // 允许配置类似`keepAlive`的选项，
      // 默认情况下不启用。
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      // 'proxy'定义代理服务器的主机名和端口
      // `auth`表示HTTP Basic auth应该用于连接到代理，并提供credentials。
      // 这将设置一个`Proxy-Authorization` header，覆盖任何使用`headers`设置的现有的`Proxy-Authorization` 自定义 headers。
      proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth: : {
          username: 'mikeymike',
          password: 'rapunz3l'
        }
      },
      // “cancelToken”指定可用于取消请求的取消令牌
      // (see Cancellation section below for details)
      cancelToken: new CancelToken(function (cancel) {
      })
    }

```

_then_返回时会收到如下返回

```js
axios.get('/user/12345')
  .then((response) => {
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
  })


```


### 全局配置

可以根据如下配置成全局变量，作用与所有请求中

全局axios默认值

```js

axios.defaults.baseURL = 'xxx'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' 

```

自定义示例默认值

    let inhttp = axios.create({
      baseURL: 'xxx'
    })

在示例创建之后改变默认值

    inhttp.defaults.header.common['Authorization'] = AUTH_TOKEN

配置优先级

后配置的内容默认覆盖前面配置的，后者优先

### 拦截器

利用axios的拦截器可以在截取请求和响应在被then和catch之前

```js

//添加请求拦截器
axios.interceptors.request.use（function（config）{
     //在发送请求之前做某事
     return config;
   }，function（error）{
     //请求错误时做些事
     return Promise.reject（error）;
   }）;
 
//添加响应拦截器
axios.interceptors.response.use（function（response）{
     //对响应数据做些事
      return response;
   }，function（error）{
     //请求错误时做些事
     return Promise.reject（error）;
   }）;
```

如果需要在某个示例中删除拦截器，你可以

    let inhttp = axios.interceptors.request.use(function () {/*...*/})
    axios.interceptors.request.eject(inhttp)

也可以对单个请求示例增加拦截器

    let

### 错误处理

### 消除

