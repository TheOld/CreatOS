// const postcss = require('postcss');
const syntax = require('postcss-html')({
  // syntax for parse scss (non-required options)
  scss: require('postcss-scss')
});

module.exports = {
  syntax,
  plugins: [require('autoprefixer')],
};
