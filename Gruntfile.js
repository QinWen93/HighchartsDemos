
module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            build: ['Gruntfile.js', '*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            build: {
                files: ['*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'watch']);
}