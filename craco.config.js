/* eslint-disable @typescript-eslint/no-var-requires */
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
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      });
      return webpackConfig;
    },
    alias: {
      '@': resolve('src'),
    },
  },
};
