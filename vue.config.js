// vue.config.js
module.exports = {
  runtimeCompiler: true,
  chainWebpack: (config) => {
    // Elm loader (please)
    config.module
      .rule('elm')
      .test(/\.elm/)
      .use('elm-webpack-loader')
      .options({
        pathToMake: '/home/leo/.nix-profile/bin/elm-make',
      })
      .loader('elm-webpack-loader')
      .end()
  }
}
