# grunt-marked

> Plugin that compiles markdown files into html, using [marked](https://github.com/chjj/marked) parser.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-marked --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-marked');
```

## The "marked" task

### Overview
In your project's Gruntfile, add a section named `marked` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  marked: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

Grunt-marked uses the [default marked parser options](https://github.com/chjj/marked). But, it also use some other options:

#### options.highlight
Type: `Boolean`
Default value: `TRUE`

A boolean flag that shows, use [highlight.js](https://github.com/isagalaev/highlight.js) plugin or not to highlight the syntax.

### Usage Examples

#### Default Options
In this example, the default options are used to compile markdown files.

```js
grunt.initConfig({
  marked: {
    dist: {
      files: {
        'dest/my.html': ['src/my.md', 'src/header.md'],
      }
    }
  },
});
```

#### Custom Options
In this example, custom options are used to compile markdown files.

```js
grunt.initConfig({
  marked: {
    options: {
      highlight: false,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    },
    dist: {
      files: {
        'dest/my.html': 'src/my.md',
        'dest/some.html': 'src/some.md'
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2014-02-26   v0.1.0   Initial release.
