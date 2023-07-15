import webpack, {RuleSetRule} from 'webpack';
import {BuildPath} from '../build/types/config';
import path from 'path';
import {buildCssLoader} from '../build/loaders/buildCssLoader';

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i};
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  })

  config.module.rules.push(buildCssLoader(true));

  return config;
};
