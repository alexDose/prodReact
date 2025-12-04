module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  'overrides': [{
    'env': {
      'node': true
    },
    'files': ['.eslintrc.{js,cjs}'],
    'parserOptions': {
      'sourceType': 'script'
    }
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
  'rules': {
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'indent': ['warn', 2],
    'no-tabs': 'error',
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx', '.tsx']
    }],
    'quotes': ['error', 'single'],
    'i18next/no-literal-string': ['error', {
      'markupOnly': true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
