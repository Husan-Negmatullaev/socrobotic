const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  const baseUrl = "src/";
  alias({
    '@components': baseUrl + 'components',
    '@layouts': baseUrl + 'components/layouts',
    '@utils': baseUrl + 'utils',
    '@constants': baseUrl + 'utils/constants',
    '@helpers': baseUrl + 'utils/helpers',
    '@styles': baseUrl + 'styles',
    '@mixins': baseUrl + 'styles/base/mixins.scss',
    '@services': baseUrl + 'services',
    '@fonts': baseUrl + 'assets/fonts',
    '@images': baseUrl + 'assets/img',
  })(config);

  return config;
};