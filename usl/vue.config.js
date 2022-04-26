const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3070',
        changeOrigin: true
      },
    }
  }
}