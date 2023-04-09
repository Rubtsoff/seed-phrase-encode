import path from "path";

import merge from "webpack-merge";
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import commonConfig from "./webpack.common";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "dream-cars.com",
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
    https: true,
    client: {
      overlay: false,
    },
  },
  plugins: [new HotModuleReplacementPlugin()],
};

export default merge(commonConfig, devConfig);
