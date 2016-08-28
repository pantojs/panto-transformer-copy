# panto-transformer-copy
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Copy transformer for panto.

```js
panto.loadTransformer('copy');

panto.$('**/*.swf').copy({destdir: 'flash', flatten: true});
```

## options
 - destdir: String
 - flatten: Boolean

[npm-url]: https://npmjs.org/package/panto-transformer-copy
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-copy.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-copy.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-copy
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-copy.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-copy
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-copy.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-copy#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-copy/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-copy/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-copy?branch=master
