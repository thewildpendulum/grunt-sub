/*
 * grunt-sub
 *
 *
 * Copyright (c) 2014 Tim Hemphill
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // remove files from running tests
    clean: {
      tests: ['test/fixtures/tmp']
    },

    sub: {
      test: {
        subdir: './test/fixtures/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s)
  grunt.loadTasks('tasks');

  // Run this plugin's test task, then run unit tests, then clean up
  grunt.registerTask('test', [
    'sub:test',
    'sub:test:task_test',
    'sub:test:target_test:target',
    'nodeunit',
    'clean'
  ]);

  // By default, run tests
  grunt.registerTask('default', ['test']);
};
