module.exports = {
  minimize: true,
  proxy: {
    '/github': 'https://api.github.com'
  },
  proxyServer: process.env.npm_config_proxy || '/github',
  modules: process.env.npm_config_modules || 'demo'
}
