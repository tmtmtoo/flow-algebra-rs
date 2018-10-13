// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const actual = Ok.new(100).isErr()
    const expected = false
    assert.equal(actual, expected)
  })

  it('err', () => {
    const actual = Err.new().isErr()
    const expected = true
    assert.equal(actual, expected)
  })
})
