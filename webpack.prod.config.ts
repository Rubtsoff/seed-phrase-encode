import merge from "webpack-merge";
import { Configuration, DefinePlugin } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import commonConfig from "./webpack.common";

const prodConfig: Configuration = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      "process.env.ENV_PREFIX": JSON.stringify(process.env.ENV_PREFIX),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.ATLAS_AUTH_DOMAIN": JSON.stringify(process.env.ATLAS_AUTH_DOMAIN),
      "process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
      "process.env.SENTRY_DSN": JSON.stringify(process.env.SENTRY_DSN),
      "process.env.SENTRY_AUTH_TOKEN": JSON.stringify(process.env.SENTRY_AUTH_TOKEN),
      "process.env.SENTRY_RELEASE_NAME": JSON.stringify(process.env.SENTRY_RELEASE_NAME),
      "process.env.AMPLITUDE_KEY": JSON.stringify(process.env.AMPLITUDE_KEY),
      "process.env.IMAGE_SERVICE_URL": JSON.stringify(process.env.IMAGE_SERVICE_URL),
      "process.env.INTERCOM_KEY": JSON.stringify(process.env.INTERCOM_KEY),
      "process.env.BRANCH_NAME": JSON.stringify(process.env.BRANCH_NAME),
    }),
  ],
};

export default merge(commonConfig, prodConfig);
