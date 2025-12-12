// webpack.config.ts
import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPath} from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  // ✅ В dev используем /api префикс для proxy
  const apiUrl = env.apiUrl || (mode === 'development' ? '/api' : 'http://localhost:8000');

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    port: PORT
  });

  return config;
};
