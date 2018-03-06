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
      {title: 'Home', path: '/'},
      {
        title: 'Languages',
        type: 'dropdown',
        items: langs
      }
    ],
    en: [
      {title: 'Home', path: '/en/'},
      {
        title: 'Languages',
        type: 'dropdown',
        items: langs
      }
    ]
  }
})