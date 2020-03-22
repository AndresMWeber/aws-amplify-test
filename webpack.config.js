require('dotenv').config();
const webpack = require('webpack');
const production = !!process.argv.find(a => a === '--prod');
module.exports = function(config) {
  const definitions = {
    DEBUG: `"${process.env.DEBUG}"`,
    ROOT_DOMAIN: process.env.ROOT_DOMAIN
      ? `"${process.env.ROOT_DOMAIN}"`
      : `"passninja.com"`,
    API_BRANCH: process.env.API_BRANCH ? `"${process.env.API_BRANCH}"` : `"v1"`,
    LOCAL_API: `"${process.env.LOCAL_API}"`,
    REGION: `"${process.env.REGION}"`,
    IOT_HOST: `"${process.env.IOT_HOST}"`,
    USER_POOL_ID: `"${process.env.USER_POOL_ID}"`,
    USER_POOL_CLIENT_ID: `"${process.env.USER_POOL_CLIENT_ID}"`,
    IDENTITY_POOL_ID: `"${process.env.IDENTITY_POOL_ID}"`,
    FEDERATION: `"${process.env.FEDERATION}"`,
    PRODUCTION_ENV: JSON.stringify(production),
    FAKE_ANDROID: JSON.stringify(Boolean(process.env.FAKE_ANDROID))
  };
  config.plugins.unshift(new webpack.DefinePlugin(definitions));
  console.log(JSON.stringify(definitions, null, 12));
  config.node = {
    crypto: true,
    tls: 'empty',
    fs: 'empty'
  };
  return config;
};
