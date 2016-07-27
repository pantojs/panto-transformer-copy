/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-07-22[14:09:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.1
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
                cwd: __dirname
            });

            panto.$('*.js').tag('js').pipe(new CopyTransformer({
                destdir: 'mock'
            }));

            panto.build().then(() => {
                assert.ok(fs.existsSync(__dirname + '/output/mock/test.js'));
            }).then(() => {
                panto.file.rimraf('.', {
                    force: true
                });
                done();
            });
        });
    });
});
