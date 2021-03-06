// Sample grunt-jekyll grunt.js file
// https://github.com/dannygarcia/grunt-jekyll

/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            dev: {
                src: ["build/dev"]
            },
            prod: {
                src: ["build/prod"]
            }
        },

        jekyll: {
            dev: {
                options: {
                    src: 'src',
                    config: 'src/_config.yml',
                    dest: 'build/dev'
                }
            },
            prod: {
                options: {
                    src: 'src',
                    config: 'src/_config.yml',
                    dest: 'build/prod'
                }
            }
        },

        htmlhint: {
            dev: {
                src: ['build/dev/**/*.html']
            },
            prod: {
                src: ['build/prod/**/*.html']
            }
        },

        bowercopy: {
            options: {},
            // Javascript
            js_dev: {
                options: {
                    destPrefix: 'build/dev/js'
                },
                files: {
                    'jquery.min.js': 'jquery/dist/jquery.js',
                    'smooth-scroll.min.js': 'smooth-scroll/dist/js/smooth-scroll.js',
                    'jquery.sticky-kit.min.js': 'sticky-kit/jquery.sticky-kit.js',
                    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.js',
                    'scrollspy.js': 'jscrollspy/scrollspy.js',
                    'sweetalert.min.js': 'sweetalert/dist/sweetalert-dev.js'
                }
            },
            css_dev: {
                options: {
                    destPrefix: 'build/dev/css'
                },
                files: {
                    'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.css',
                    'bootstrap-datepicker.min.css': 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
                    'sweetalert.css': 'sweetalert/dist/sweetalert.css',
                    'spinners.css': 'css-spinners/css/spinners.css'
                }
            },
            js_prod: {
                options: {
                    destPrefix: 'build/prod/js'
                },
                files: {
                    'jquery.min.js': 'jquery/dist/jquery.min.js',
                    'smooth-scroll.min.js': 'smooth-scroll/dist/js/smooth-scroll.min.js',
                    'jquery.sticky-kit.min.js': 'sticky-kit/jquery.sticky-kit.min.js',
                    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'scrollspy.js': 'jscrollspy/scrollspy.js',
                    'sweetalert.min.js': 'sweetalert/dist/sweetalert.min.js'
                }
            },
            css_prod: {
                options: {
                    destPrefix: 'build/prod/css'
                },
                files: {
                    'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap-datepicker.min.css': 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
                    'sweetalert.css': 'sweetalert/dist/sweetalert.css',
                    'spinners.css': 'css-spinners/css/spinners.css'
                }
            },
            fonts_dev:{
                options: {
                    destPrefix: 'build/dev'
                },
                files: {
                    'fonts': 'bootstrap/dist/fonts/*'
                }
            },
            fonts_prod:{
                options: {
                    destPrefix: 'build/prod'
                },
                files: {
                    'fonts': 'bootstrap/dist/fonts/*'
                }
            }
        },

        connect: {
            dev: {
                port: 1337,
                base: 'build/dev'
            },
            prod: {
                port: 1337,
                base: 'build/prod'
            }
        },

        'ftp-deploy': {
            test: {
                auth: {
                    host: 'login-146.hoststar.ch',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build/dev',
                dest: '/html/bbambb',
                forceVerbose: true
            },
            teamcity: {
                auth: {
                    authPath: 'D:/Development/Private/.ftppass',
                    host: 'login-146.hoststar.ch',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build/prod',
                dest: '/html/bbambb',
                forceVerbose: true
            }
        },

        watch: { // for development run 'grunt watch'
            jekyll: {
                files: ['src/**/**.*'],
                tasks: ['ci']
            }
        }
    });

    // tasks

    grunt.registerTask('ci', ['clean:dev', 'jekyll:dev', 'htmlhint:dev', 'bowercopy:js_dev', 'bowercopy:css_dev', 'bowercopy:fonts_dev']); // Continous Integration Build
    grunt.registerTask('release', ['clean:prod', 'jekyll:prod', 'htmlhint:prod', 'bowercopy:js_prod', 'bowercopy:css_prod', 'bowercopy:fonts_prod']); // Production Build
    grunt.registerTask('deploy', ['ci', 'ftp-deploy']);
    grunt.registerTask('deploy-teamcity', ['release', 'ftp-deploy:teamcity']);
    grunt.registerTask('default', ['ci']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-ftp-deploy');
};
