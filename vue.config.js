const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/app/': {
          /* 目标代理服务器地址 */
          target: 'http://127.0.0.1:3007/',
          /* 允许跨域 */
          changeOrigin: true,
          pathRewrite: {
            '^/app/': '' //规定请求地址以什么作为开头
          }
      }
    }
  }
})
