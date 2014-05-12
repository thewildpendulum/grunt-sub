/*
 * grunt-sub
 *
 * Copyright (c) 2014 Tim Hemphill
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var path = require('path');

    grunt.registerMultiTask('sub', "Run sub-projects' Grunt tasks", function () {
        if (!grunt.file.exists(this.data.subdir)) {
            grunt.log.error('Directory "' + this.data.subdir + '" not found.');
            return false;
        }

        var done   = this.async(),
            subdir = path.resolve(this.data.subdir),
            task   = arguments.length ? [].join.call(arguments, ':') : 'default';

        grunt.util.spawn({
            cmd:  'grunt',
            args: [task],
            opts: {
                cwd:   subdir,
                stdio: 'inherit'
            }
        }, function (error, result, code) {
            if (code === 127) {
                grunt.log.error('Error running sub command. Did you run "npm install" in the target project?');
            } else {
                grunt.log.writeln('\n' + result.stdout);
            }

            done(code === 0);
        });
    });
};
