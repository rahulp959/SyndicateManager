module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.jsx'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        "copy": {
            main: {
                src: ['index.html', 'node_modules/react/dist/react.js', 'node_modules/react-dom/dist/react-dom.js',
                    'node_modules/react-bootstrap/lib', 'node_modules/requirejs/bin/r.js', 'node_modules/bootstrap/**', 'node_modules/jquery/*'],
                dest: 'dist/'
            }
        },
        clean: {
            clean: ["dist/"]
        },
        watch: {
            babel: {
                files: ['src/**/*.jsx'],
                tasks: ['babel'],
                options: {
                    spawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['babel', 'copy']);
};




