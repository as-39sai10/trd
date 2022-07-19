module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: "trdnow"
    }
  },
  devServer: {
    port: 3333,
    proxy: 'http://localhost:3333'
  },

}