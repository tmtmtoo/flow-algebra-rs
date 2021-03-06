// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const actual = Ok.new(100).mapErr(e => e).unwrap()
    const expected = 100
    assert.equal(actual, expected)
  })

  it('err', () => {
    const actual = Err.new('err').mapErr(err => `${err}!`).unwrapErr()
    const expected = 'err!'
    assert.equal(actual, expected)
  })
})
