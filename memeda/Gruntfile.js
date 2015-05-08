module.exports = function (grunt) {

    'use strict';

    var banner = "/*!\n" +
        " * memed system established by ZYX %>\n" +
        " */\n";

    var targetFolder = "public/build";
    var minJS = targetFolder + '/memeda.critapp.min.js';

    var cssFolder = "public/stylesheets/";
    var jsFolder = "public/javascripts/";

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        clean: {
            pre: {
                src: [targetFolder]
            },
            after: {
                src: [
                    targetFolder + '/memeda.all.js',
                    targetFolder + '/memeda.libs.js'
                ]
            }
        },
        copy: {
            deploy: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'public/images',
                        src: [
                            "*.png",
                            "*.gif"
                        ],
                        dest: 'public/build/img'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'public/',
                        src: [
                            "**/*.png",
                            "**/*.gif"
                        ],
                        dest: 'public/build/img'
                    }
                ]
            },
            fontawesome: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/charisma-master/fonts',
                        src: [
                            "*"
                        ],
                        dest: 'public/build/fonts'
                    }
                ]
            },
            chosen: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'public/build/img',
                        src: [
                            "chosen-sprite.png",
                            "chosen-sprite@2x.png"
                        ],
                        dest: 'public/build/css'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: '/*! file separator*/'
            },
            marmot_code: {
                files: {
                    "public/build/memeda.all.js": [jsFolder + "/main.js"]
                }
            },
            extra_libs: {
                files: {
                    "public/build/memeda.libs.js": [
                        jsFolder + "libs/bootstrap.min.js",
                        jsFolder + "libs/jquery.validate.js",
                        jsFolder + "libs/timeSheet/timesheet-ec6cdbbf.js",
                        jsFolder + "libs/timeSheet/main-60a953af.js",
                        jsFolder + "libs/timeLine/jquery.jqtimeline.js",
                        jsFolder + "libs/datePicker/jquery.datetimepicker.js",
                        jsFolder + "libs/chosen_v1.4.1/chosen.jquery.min.js",
                        jsFolder + "libs/chosen_v1.4.1/chosen.proto.min.js",
                    ],
                    "public/build/memeda.libs.charisma-master.js": [    
                        "public/charisma-master/bower_components/jquery/jquery.min.js",
                        "public/charisma-master/js/jquery.cookie.js",
                        "public/charisma-master/bower_components/moment/min/moment.min.js",
                        "public/charisma-master/bower_components/fullcalendar/dist/fullcalendar.min.js",
                        "public/charisma-master/js/jquery.dataTables.min.js",
                        "public/charisma-master/bower_components/colorbox/jquery.colorbox-min.js",
                        "public/charisma-master/js/jquery.noty.js",
                        "public/charisma-master/bower_components/responsive-tables/responsive-tables.js",
                        "public/charisma-master/bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js",
                        "public/charisma-master/js/jquery.raty.min.js",
                        "public/charisma-master/js/jquery.iphone.toggle.js",
                        "public/charisma-master/js/jquery.autogrow-textarea.js",
                        "public/charisma-master/js/jquery.uploadify-3.1.min.js",
                        "public/charisma-master/js/jquery.history.js",
                        "public/charisma-master/js/charisma.js"
                        ]
                }
            }
        },
        jshint: {
            options: {
                "sub": true,
                '-W033': true
            },
            pre: {
                src: [jsFolder + "/main.js"]
            }
        },
        cssmin: {
            compress: {
                files: {
                    'public/build/css/memeda.min.css': [
                        cssFolder + "/chosen.css",
                        cssFolder + "/template-rtl.css",
                        cssFolder + "/memeda.css",
                        cssFolder + "/style.css",
                        cssFolder + "/chosen.min.css",
                        cssFolder + "/timePicker/jquery.datetimepicker.css",
                        cssFolder + "/timeLine/jquery.timeline.blue.css",
                        cssFolder + "/timeLine/main.css"
                    ],
                    'public/build/css/memeda.libs.min.css': [
                        "public/charisma-master/css/bootstrap-cerulean.min.css",
                        "public/charisma-master/css/charisma-app.css","public/charisma-master/bower_components/fullcalendar/dist/fullcalendar.css",
                        "public/charisma-master/bower_components/fullcalendar/dist/fullcalendar.print.css",
                        "public/charisma-master/bower_components/chosen/chosen.min.css",
                        "public/charisma-master/bower_components/colorbox/example3/colorbox.css","public/charisma-master/bower_components/responsive-tables/responsive-tables.css",
                        "public/charisma-master/bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css",
                        "public/charisma-master/css/jquery.noty.css",
                        "public/charisma-master/css/noty_theme_default.css",
                        "public/charisma-master/css/elfinder.min.css",
                        "public/charisma-master/css/elfinder.theme.css",
                        "public/charisma-master/css/jquery.iphone.toggle.css",
                        "public/charisma-master/css/uploadify.css",
                        "public/charisma-master/css/animate.min.css"
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner: banner,
                compress: true,
                mangle: false
            },
            build: {
                files: [
                    {
                        src: [targetFolder + "/memeda.all.js", targetFolder + "/memeda.models.js"],
                        dest: targetFolder + '/memeda.min.js'
                    },
                    {
                        src: [targetFolder + "/memeda.libs.js"],
                        dest: targetFolder + '/memeda.libs.min.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['clean:pre', "jshint:pre", 'copy',  'cssmin', 'concat', 'uglify', 'clean:after']);
};