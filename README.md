# sub

Run sub-projects' grunt tasks. Stolen and liberally modified from this [gist](https://gist.github.com/cowboy/3819170) by [@cowboy](https://github.com/cowboy).

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install sub --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('sub');
```

## The "sub" task

### Overview
In a separate, "master" Gruntfile, add a section named `sub` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sub: {
    subdir: {
      // directory containing the sub-project's Gruntfile
    },
  },
})
```

### Options

#### options.subdir
Type: `String`
Default value: none

A string value that grunt-sub uses to find the Gruntfile of a sub-project

### Usage

This plugin is meant to augment grunt when used from the command line. Once your `sub` task is configured and you've installed your sub-projects' dependencies, you may control any one of them from one location:

`grunt sub:subproject:task_name`

#### Running the Default task
In this example, the default task is run by passing `sub` just one argument: the project name.

`grunt sub:subproject`

#### Running a specific task
In this example, an arbitrary task is run by passing `sub` two arguments: the project name and the task name.

`grunt sub:subproject:task`

#### Running the target of a multitask
In this example, the target of a multitask is run by passing `sub` three arguments: the project name, the task name, and the target name.

`grunt sub:subproject:task:target`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
May 12, 2014 - Alpha release

## License
Copyright (c) 2014 Tim Hemphill. Licensed under the MIT license.
