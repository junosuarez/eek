var EventEmitter = require('events').EventEmitter

function eek (constructor) {
  var f = function () {
    constructor.apply(this, arguments)

  }
  f.name = constructor.name
  var proto = {}
  proto.__proto__ = constructor.prototype
  f.prototype = proto
  Object.keys(EventEmitter.prototype).forEach(function(key) {
    proto[key] = EventEmitter.prototype[key]
  })

  return f
}

module.exports = eek
