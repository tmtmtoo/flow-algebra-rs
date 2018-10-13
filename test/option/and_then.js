// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Some, None } from '../../src'

describe(__filename, () => {

  it('some to some', () => {
    const actual = Some.new(100).andThen(n => Some.new(n * 2)).unwrapOr(10)
    const expected = 200
    assert.equal(actual, expected)
  })

  it('some to none', () => {
    const actual = Some.new(100).andThen(() => None.new()).isNone()
    const expected = true
    assert.equal(actual, expected)
  })

  it('none', () => {
    const actual = None.new().andThen(n => Some.new(n * 2)).isNone()
    const expected = true
    assert.equal(actual, expected)
  })
})
