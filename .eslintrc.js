module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
};
// {
//   env: {
//     browser: true,
//     es2020: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 11,
//     sourceType: 'module',
//   },
//   plugins: ['react', 'prettier'],
//   rules: {
//     'react/jsx-filename-extension': [
//       1,
//       {
//         extensions: ['.js', '.jsx'],
//       },
//     ],
//     'react/jsx-props-no-spreading': 'off',
//     'prettier/prettier': [
//       'error',
//       {
//         trailingComma: 'es5',
//         singleQuote: true,
//         printWidth: 100,
//       },
//     ],
//   },
// };
