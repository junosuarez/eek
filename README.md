# eek
mix in an EventEmitter to your constructor

## usage
```js
var eek = require('eek')

var foo = eek(function foo() {
  this.isAFoo = true
})

var bar = new foo()
bar instanceof foo
// => true

bar.on('foo', function (val) {
  // this is called
  // val => 23
})
bar.emit('foo', 23)
```


## installation

    $ npm install eek


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md
