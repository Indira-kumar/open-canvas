// post css is a tool for transforming css with javascript plugins
// it is typically used to add vendor prefixes, minify css, and use future css features today
// this config file sets up postcss to use tailwind css plugin
// this file is a config for next.js on how to process css files
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
