/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-22[14:09:12]:revised
 * 2016-08-28[11:03:36]:support flatten option
 *
 * @author yanni4night@gmail.com
 * @version 0.1.4
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const path = require('path');

class CopyTransformer extends Transformer {
    _transform(file) {
        const destdir = this.options.destdir || '.';
        const flatten = this.options.flatten;

        return panto.file.copy(file.filename, path.join(destdir, flatten ? path.basename(file.filename) : file.filename));
    }
    isCacheable() {
        return false;
    }
}

module.exports = CopyTransformer;
