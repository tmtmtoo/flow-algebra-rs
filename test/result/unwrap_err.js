// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    let exception = false

    try {
      Ok.new(100).unwrapErr()
    } catch(e) {
      exception = true
    }

    assert.ok(exception)
  })

  it('err', () => {
    const actual = Err.new('err').unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })
})
