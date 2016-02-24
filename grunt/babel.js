module.exports = {
  options: {
    presets: [
      "es2015"
    ]
  },
  dist: {
    files: {
      "es5/app.js": "es6/app.js"
    }
  }
};