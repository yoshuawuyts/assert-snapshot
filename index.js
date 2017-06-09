var assertHtml = require('assert-html')
var assert = require('assert')
var path = require('path')
var fs = require('fs')

var FILENAME = 'snapshot.json'

module.exports = snapshot

function snapshot (_assert, html, cache) {
  assert.ok(_assert, 'assert-snapshot: _assert should be type object or type function')
  assert.equal(typeof _assert.name, 'string', 'assert-snapshot: _assert.name should be type string')
  assert.equal(typeof html, 'string', 'assert-snapshot: html should be type string')

  var testname = _assert.name
  var dirname = path.dirname(module.parent.filename)
  var filename = path.join(dirname, FILENAME)

  // if no cache was passed, try reading from the file
  if (!cache) {
    try {
      var stat = fs.statSync(filename)
    } catch (e) {}

    if (stat) {
      cache = fs.readFileSync(filename)
      try {
        cache = JSON.parse(cache)
      } catch (e) {
        throw new Error('assert-snapshot: could not parse snapshot file located at ' + filename)
      }
    }
  }

  cache = cache || {}
  var expected = cache[testname] || ''
  _assert.ok(expected, 'assert-snapshot: snapshot found for "' + testname + '"')
  assertHtml(_assert, html, expected)
}
