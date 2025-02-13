module.exports = {
    presets: [['next/babel']],
    plugins: [
      ['styled-components', { ssr: true }],
      ['@babel/plugin-transform-runtime', { regenerator: true }]
    ],
};
  