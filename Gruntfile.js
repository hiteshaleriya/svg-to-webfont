
module.exports = function(grunt) {

    grunt.initConfig({
        webfont: {
            icons: {
                src: 'svg/*.svg',
                dest: 'fonts/',
                options: {
                    font:"DemoFonts",  //Name of font and base name of font files.
                    engine: "fontforge",
                    ligatures: true
                }
            }
        }
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);

};