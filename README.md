# assert-snapshot [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Snapshot UI testing for tape tests. Inspired by [Jest snapshot
testing](https://facebook.github.io/jest/docs/snapshot-testing.html), but
implemented as a module instead of a custom runtime.

## Usage
```js
var snap = require('assert-snapshot')
var tape = require('tape')
var html = require('bel')

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
```

Outputs

```tap
TAP version 13
# my cool component
ok 1 snapshot found for "my cool component"
ok 2 <section>
ok 3 ·· Hello planet
ok 4 </section>

1..4
# tests 4
# pass  4

# ok

```

## Updating snapshots
By default no snapshot is saved. Set the `UPDATE_SNAPSHOT=true` env variable to
update the snapshot and save it to `snapshot.json`. Each snapshot is saved
using the name of the test as the key, so make sure test names are unique.

```sh
$ UPDATE_SNAPSHOT=true node example.js
```

## API
### `snapshot(assert, html, [cache])`
Assert a string of HTML using a custom assert function. Takes an optional cache
object that contains the expected values. Use this if snapshot tests become I/O
bound.

## See Also
- [yoshuawuyts/assert-html](https://github.com/yoshuawuyts/assert-html)
- [thlorenz/spok](https://github.com/thlorenz/spok)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/assert-snapshot.svg?style=flat-square
[3]: https://npmjs.org/package/assert-snapshot
[4]: https://img.shields.io/travis/yoshuawuyts/assert-snapshot/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/assert-snapshot
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/assert-snapshot/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/assert-snapshot
[8]: http://img.shields.io/npm/dm/assert-snapshot.svg?style=flat-square
[9]: https://npmjs.org/package/assert-snapshot
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
