var chai = require('chai')
chai.should()
chai.use(require('chai-interface'))

describe('eek', function () {
  var eek = require('../')
  
  it('adds EE interface to a constructor', function () {

    var foo = eek(function foo() {
      this.isAFoo = true
    })

    var bar = new foo()
    bar.isAFoo.should.equal(true)
    bar.should.be.instanceof(foo)
    bar.should.have.interface({
      on: Function,
      once: Function,
      addListener: Function,
      removeListener: Function,
      emit: Function
    })

  })
  it('is a functioning EE', function (done) {
    var foo = eek(function foo() {
      this.isAFoo = true
    })

    var bar = new foo()
    bar.isAFoo.should.equal(true)
    bar.on('foo', function (val) {
      val.should.equal(23)
      done()
    })
    bar.emit('foo', 23)

  })
})
