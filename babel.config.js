module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime' /* resolves => error ReferenceError: regeneratorRuntime is not defined */,
  ],
};
