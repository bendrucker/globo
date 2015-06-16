'use strict'

var test = require('tape')
var globalize = require('./')

test(function (t) {
  t.equal(globalize('foo'), '(typeof window !== "undefined" ? window.foo : typeof global !== "undefined" ? global.foo : null)')
  t.end()
})
