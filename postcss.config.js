// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准 iphoneX
      viewportWidth: 375
    }
  }
}
