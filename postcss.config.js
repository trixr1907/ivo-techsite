module.exports = {
  plugins: {
    '@tailwindcss/postcss7-compat': {},
    'autoprefixer': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false
  }
}
