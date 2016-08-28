/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-07-22[14:09:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.4
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const fs = require('fs');
const CopyTransformer = require('../');

describe('panto-transformer-copy', () => {
    describe('#transform', () => {
        it('should copy', done => {
            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            panto.$('**/*.css').tag('css').pipe(new CopyTransformer({
                destdir: 'mock'
            }));

            panto.build().then(() => {
                assert.ok(fs.existsSync(__dirname + '/output/mock/fixtures/foo.css'));
            }).then(() => {
                return panto.file.rimraf('.');
            }).then(() => done()).catch(e => console.error(e));
        });
        it('should support flatten', done => {
            panto.setOptions({
                cwd: __dirname,
                output: 'output'
            });

            panto.$('**/*.css').tag('css').pipe(new CopyTransformer({
                destdir: 'mock',
                flatten: true
            }));

            panto.build().then(() => {
                assert.ok(fs.existsSync(__dirname + '/output/mock/foo.css'));
            }).then(() => {
                return panto.file.rimraf('.');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
