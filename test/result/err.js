// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok', () => {
    const option = Ok.new(100).err()
    assert.ok(option.isNone())
  })

  it('err', () => {
    const option = Err.new('err').err()
    assert.ok(option.isSome())

    const actual = option.unwrap()
    const expected = 'err'
    assert.equal(actual, expected)
  })
})
