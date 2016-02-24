module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            src: 'dist/*.js',
            options: {
                specs: 'spec/*Spec.js',
                helpers: 'spec/*Helper.js'
            }
        },
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/example.js": "src/example.js",
                    "dist/exercise.js": "src/exercise.js"
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('default', ['babel', 'jasmine']);

};
