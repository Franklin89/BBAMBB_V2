// Sample grunt-jekyll grunt.js file
// https://github.com/dannygarcia/grunt-jekyll

/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jekyll: {
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
        htmlhint:{
          dev:{
              src:['build/dev/**/*.html']
          },
          prod:{
            src:['build/prod/**/*.html']
          }
        },
        bowercopy:{
          options: {
            // Bower components folder will be removed afterwards
            clean: false
          },
          // Javascript
          js_dev: {
            options: {
                destPrefix: 'build/dev/js'
            },
            files: {
                'jquery.js': 'jquery/dist/jquery.js',
                'smooth-scroll.js': 'smooth-scroll/dist/js/smooth-scroll.js',
                'jquery.sticky-kit.js': 'sticky-kit/jquery.sticky-kit.js'
            }
          },
          css_dev: {
            options: {
                destPrefix: 'build/dev/css'
            },
            files: {
                'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
            }
          },
          js_prod: {
            options: {
                destPrefix: 'build/prod/js'
            },
            files: {
                'jquery.js': 'jquery/dist/jquery.js',
                'smooth-scroll.js': 'smooth-scroll/dist/js/smooth-scroll.js',
                'jquery.sticky-kit.js': 'sticky-kit/jquery.sticky-kit.js'
            }
          },
          css_prod: {
            options: {
                destPrefix: 'build/prod/css'
            },
            files: {
                'bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
            }
          }
        },
        watch: { // for development run 'grunt watch'
            jekyll: {
                files: ['src/**/**.*'],
                tasks: ['ci']
            }
        }
    });

    // taks
    grunt.registerTask('ci', ['jekyll:dev', 'htmlhint:dev', 'bowercopy:js_dev', 'bowercopy:css_dev']) // Continous Integration Build
    grunt.registerTask('release', ['jekyll:prod', 'htmlhint:prod', 'bowercopy:js_prod', 'bowercopy:css_prod']) // Production Build

    grunt.registerTask('default', ['ci']);
    grunt.registerTask('watch', ['ci', 'watch']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-htmlhint');
};
