export default {
  target: 'static',
  router: { trailingSlash: true },
  generate: {
    cache: false,
    crawler: true,
    routes: [
      '/',
      '/test/slash/',
      '/test/noslash',
    ]
  }
}
