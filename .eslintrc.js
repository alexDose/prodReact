module.exports = {
  'ignorePatterns': ['json-server/**'],
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
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
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'indent': ['warn', 2],
    'no-tabs': 'error',
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx', '.tsx']
    }],
    'quotes': ['error', 'single'],
    'i18next/no-literal-string': ['error', {
      'markupOnly': true,
      'ignoreAttribute': ['data-testid', 'to', 'target', 'type', 'as']
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
