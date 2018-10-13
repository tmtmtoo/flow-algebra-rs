// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const actual = Ok.new(100).isOk()
    const expected = true
    assert.equal(actual, expected)
  })

  it('err', () => {
    const actual = Err.new().isOk()
    const expected = false
    assert.equal(actual, expected)
  })
})
