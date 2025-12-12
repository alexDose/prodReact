// config/build/buildDevServer.ts
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    // ✅ Правильная типизация для webpack-dev-server v4+
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8000',
        pathRewrite: {'^/api': ''},
        changeOrigin: true,
        secure: false,
      },
    ],
  };
}
