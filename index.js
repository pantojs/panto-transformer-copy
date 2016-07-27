/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-22[14:09:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.1
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const path = require('path');

class CopyTransformer extends Transformer {
    _transform(file) {
        const destdir = this.options.destdir || '.';

        return panto.file.copy(file.filename, path.join(destdir,file.filename));
    }

}

module.exports = CopyTransformer;
