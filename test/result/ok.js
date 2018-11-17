// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const option = Ok.new(100).ok()
    assert.ok(option.isSome())

    const actual = option.unwrap()
    const expected = 100
    assert.equal(actual, expected)
  })

  it('err', () => {
    const option = Err.new('err').ok()
    assert.ok(option.isNone())
  })
})
