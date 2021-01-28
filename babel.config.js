// Target node is only for jest
const presetEnv = process.env.NODE_ENV === 'test' ? ['@babel/preset-env', { targets: { node: 'current' } }] : '@babel/preset-env';
module.exports = {
  presets: [presetEnv, '@babel/preset-react'],
};
