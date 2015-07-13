'use strict'

var test = require('tape')
var globalize = require('./')

test(function (t) {
  t.equal(globalize('foo'), '(typeof window !== "undefined" ? window[\'foo\'] : typeof global !== "undefined" ? global[\'foo\'] : null)')
  t.end()
})

test(function (t) {
  t.equal(globalize('foo-bar'), '(typeof window !== "undefined" ? window[\'foo-bar\'] : typeof global !== "undefined" ? global[\'foo-bar\'] : null)')
  t.end()
})
