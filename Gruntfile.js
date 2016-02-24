module.exports = function(grunt) {
  // Plugins
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Configurations
  grunt.initConfig({
    babel: require('./grunt/babel'),
    watch: require('./grunt/watch')
  });

  grunt.registerTask('default', [
    'babel',
    'watch'
  ]);
};