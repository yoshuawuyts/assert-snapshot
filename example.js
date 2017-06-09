var tape = require('tape')
var html = require('bel')

var snap = require('./')

tape('my cool component', function (assert) {
  var str = myComponent().toString()
  snap(assert, str)
  assert.end()
})

function myComponent () {
  return html`
    <section>
      Hello planet
    </section>
  `
}
