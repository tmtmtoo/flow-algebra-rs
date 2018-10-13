// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const actual = Ok.new(100).map(n => n * 2).unwrap()
    const expected = 200
    assert.equal(actual, expected)
  })

  it('err', () => {
    const actual = Err.new('err').map(n => n * 2).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })
})
