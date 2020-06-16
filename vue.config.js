module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/variables.scss";'
      }
    }
  },

  transpileDependencies: ["vuetify"],
  outputDir: "docs",
  publicPath: "/learn-english/"
}
