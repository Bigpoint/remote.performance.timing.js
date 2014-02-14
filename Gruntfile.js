module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! \n(c) 2014 Bigpoint, GmbH | <%= pkg.name %>-<%= pkg.version %>-<%= grunt.template.today("dd.mm.yyyy") %> | http://www.apache.org/licenses/LICENSE-2.0 \n*/\n',
                compress: {
                    drop_console: true
                }
            },
            build: {
                src: 'lib/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            all: ['lib/<%= pkg.name %>.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['uglify','jshint']);
};