module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          dist: {
            files: {
              'build/app.js': 'src/**/*.js',
            },
            options: {
              transform: ['node-underscorify', 'grunt-less-browserify']
            },
            lessBrowserify: {
                output:  'build/styles.css'
                //jsAppend: false
            }
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('default', ['browserify']);
};