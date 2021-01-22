module.exports = {
  plugins: [
    require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
  ],
  'postcss-pxtorem': {
    rootValue ({ file }) {
      return file.indexOf('vant') !== -1 ? 37.5 : 75
    },
    propList: ['*']
  }
}
