/*
 * sub
 *
 *
 * Copyright (c) 2014 Tim Hemphill
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    target_test: {
      target: ''
    }
  });

  grunt.registerTask('default_test', 'Test with no task', function () {
    grunt.file.write('tmp/default_output', 'Ran default_test');
  });

  grunt.registerTask('task_test', 'Test with given task name', function () {
    grunt.file.write('tmp/task_output', 'Ran task_test');
  });

  grunt.registerMultiTask('target_test', 'Test multi task with target', function () {
    grunt.file.write('tmp/target_output', 'Ran target_test with: ' + this.target);
  });

  // By default, run test with no task
  grunt.registerTask('default', ['default_test']);
};
