const langs = [
  { title: '简体中文', path: '/' },
  { title: 'English', path: '/en/' }
]

docute.init({
  title: 'oView',
  repo: 'chen8ih/oView',
  languages: ['/', 'en'],
  nav: {
    default: [
      {title: '首页', path: '/'},
      {
        title: '组件',
        type: 'dropdown',
        items: [
          {
            title: '全部组件',
            path: '/zh-CN/components'
          }
        ]
      },
      {
        title: '资料',
        type: 'dropdown',
        items: [
          {
            title: 'nodejs',
            path: '/zh-CN/node'
          },
          {
            title: 'vue',
            path: '/zh-CN/vue'
          },
          {
            title: 'gulp',
            path: '/zh-CN/gulp'
          },
          {
            title: 'yapi',
            path: '/zh-CN/yapi'
          }
        ]
      },
      {
        title: 'Languages',
        type: 'dropdown',
        items: langs
      }
    ],
    en: [
      {title: 'Home', path: '/en/'},
      {
        title: 'Components',
        type: 'dropdown',
        items: [
          {
            title: 'All Components',
            path: '/en/components'
          }
        ]
      },
      {
        title: 'Languages',
        type: 'dropdown',
        items: langs
      }
    ]
  }
})