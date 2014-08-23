module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          dist: {
            files: {
              'build/app.js': 'src/**/*.js',
            },
            options: {
              transform: ['node-underscorify']
            }
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('default', ['browserify']);
};