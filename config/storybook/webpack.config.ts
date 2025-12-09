import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // Ensure resolve exists
  config.resolve = config.resolve || {};
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    paths.src,
  ];
  config.resolve.extensions = [
    ...(config.resolve.extensions || []),
    '.tsx', '.ts',
  ];

  // Initialize module and rules
  config.module = config.module || {};
  config.module.rules = config.module.rules || [];

  // Store rules in a variable for TypeScript
  const rules = config.module.rules;

  // Modify SVG rule
  config.module.rules = rules.map((rule): typeof rule => {
    if (
      rule &&
            typeof rule === 'object' &&
            'test' in rule &&
            rule.test instanceof RegExp &&
            rule.test.test('.svg')
    ) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // Add SVG loader
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  // Add SCSS support
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  });

  // Add webpack DefinePlugin
  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );

  return config;
};
