/*
 * grunt-marked
 * https://github.com/gobwas/grunt-marked
 *
 * Copyright (c) 2014 Sergey Kamardin <gobwas@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var marked = require('marked'),
        async  = require('async'),
        fs     = require('fs'),
        os     = require('os'),
        util   = require('util');

    grunt.registerMultiTask("marked", "Runs marked plugin to render markdown files", function() {
        var done    = this.async(),
            options = this.options({
                gfm:         true,
                tables:      true,
                breaks:      false,
                pedantic:    false,
                sanitize:    true,
                smartLists:  true,
                smartypants: false,
                highlight:   true
            }),
            files = this.files;

        options.renderer = new marked.Renderer();

        // install highlight.js
        if (options.highlight) {
            options.highlight = (function(highlight) {
                return function (code) {
                    return highlight.highlightAuto(code).value;
                };
            })(require('highlight.js'));
        }

        marked.setOptions(options);

        async.each(files, function(file, next) {
            var sources, destination;

            destination = file.dest;

            sources = file.src.filter(function(path) {
                if (!fs.existsSync(path)) {
                    grunt.log.warn(util.format('Source file "%s" is not found', path));
                    return false;
                }

                return true;
            });

            async.map(sources, fs.readFile, function(err, contents) {
                if (err) {
                    grunt.log.error(util.format('Could not read files "%s"', sources.join(', ')));
                    return next(err);
                }

                grunt.file.write(destination, marked(contents.join(os.EOL)));
                grunt.verbose.writeln(util.format('Successfully rendered markdown to "%s"', destination));
                next();
            });

        }, function() {
          grunt.log.ok(files.length + ' ' + grunt.util.pluralize(files.length, 'file/files') + ' created.');
          done();
        });
    });

};
