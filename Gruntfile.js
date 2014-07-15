module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [
                  {
                    expand: true,
                    cwd: 'sass/',
                    src: ['**/*.scss'],
                    dest: 'css/',
                    ext: '.css',
                  },
                ],
            }
        },
        uglify: {
            dist: {
              files:{
                    'js/modals-min.js': ['js/modals.js']
              },
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            },
            scripts: {
                files: 'js/**/*.js',
                tasks: ['newer:uglify'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('default',['watch']);
}