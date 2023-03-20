const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRole: function (lessRule) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            // module.less 样式变量名格式
            localIdentName: '[local]_[hash:base64:5]',
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
};
