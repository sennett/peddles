module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          dist: {
            files: {
              'build/app.js': 'src/**/*.js',
            },
            options: {}
          }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-browserify');
    
    // Default task(s).
    grunt.registerTask('default', []);
};