// Sample grunt-jekyll grunt.js file
// https://github.com/dannygarcia/grunt-jekyll

/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        jekyll: {
            server : {
                options : {
                    src: 'src',
                    config: 'src/_config.yml',
                    dest: 'build/dev',
                    serve : true,
                    auto : true
                }
            },
            dev: {
                options : {
                    src: 'src',
                    config: 'src/_config.yml',
                    dest: 'build/dev'
                }
            },
            prod: {
                options : {
                    src: 'src',
                    config: 'src/_config.yml',
                    dest: 'build/prod'
                }
            }
        },
        watch: { // for development run 'grunt watch'
            jekyll: {
                files: ['src/**/**.*'],
                tasks: ['jekyll:dev']
            }
        }
    });

    // taks
    grunt.registerTask('default', 'jekyll:dev');
    grunt.registerTask('serve', 'jekyll:server');
    grunt.registerTask('watch', ['jekyll:dev', 'watch']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');
};