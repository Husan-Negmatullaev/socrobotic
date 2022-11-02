const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@fonts': 'src/assets/fonts',
    '@images': 'src/assets/img',
    '@components': 'src/components',
    '@utils': 'src/utils',
    '@constants': 'src/utils/constants',
    '@helpers': 'src/utils/helpers',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@mixins': 'src/styles/base/mixins.scss',
  })(config);

  return config;
}