module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts'
        }
    },
    transpileDependencies: [
      'vuetify',
    ],
    devServer: {
      port: 8080
    }
  };
