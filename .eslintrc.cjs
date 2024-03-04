module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'linebreak-style': 'off',
    'import/extensions': 'off',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['@components', './src/components'],
          ['@images', './src/assets/images'],
          ['@icons', './src/assets/icons'],
          ['@fonts', './src/assets/fonts'],
          ['@styles', './src/styles'],
          ['@vars', './src/styles/vars'],
        ],
      },
    },
  },
};
