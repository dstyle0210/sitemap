module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass/',
                    src: ['*.scss'],
                    dest: 'src/css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass:dist']
            },
        },
    });

    // SASS to CSS
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass','watch']);

};