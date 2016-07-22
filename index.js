/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-22[14:09:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const fs = require('fs-extra');
const path = require('path');

class CopyTransformer extends Transformer {
    _transform(file) {
        const destdir = this.options.destdir || '.';

        return new Promise((resolve, reject) => {
            const output = path.join(panto.getOption('cwd'), panto.getOption('output'), destdir, file.filename);

            fs.copy(panto.file.locate(file.filename), output, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(file);
                }
            });

        });;
    }

}

module.exports = CopyTransformer;
