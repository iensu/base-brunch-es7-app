const fs = require('fs');

const babelConfig = JSON.parse(fs.readFileSync('./.babelrc').toString());

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: babelConfig
  }
};
