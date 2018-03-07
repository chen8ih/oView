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