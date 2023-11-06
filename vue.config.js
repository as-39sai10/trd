module.exports = {
  assetsDir: './',
  publicPath: './',
  outputDir: 'docs',
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