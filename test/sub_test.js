'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sub = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_test: function (test) {
    test.expect(1);

    var actual = grunt.file.read(__dirname + '/fixtures/tmp/default_output');
    var expected = 'Ran default_test';
    test.equal(actual, expected, "should run the sub project's default task.");

    test.done();
  },
  task_test: function (test) {
    test.expect(1);

    var actual = grunt.file.read(__dirname + '/fixtures/tmp/task_output');
    var expected = 'Ran task_test';
    test.equal(actual, expected, "should run the sub project's specified task.");

    test.done();
  },
  target_test: function (test) {
    test.expect(1);

    var actual = grunt.file.read(__dirname + '/fixtures/tmp/target_output');
    var expected = 'Ran target_test with: target';
    test.equal(actual, expected, "should run the sub project's specified target of the specified task.");

    test.done();
  }
};
