// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok to ok', () => {
    const actual = Ok.new(100).andThen(n => Ok.new(n * 2)).unwrapOr(10)
    const expected = 200
    assert.equal(actual, expected)
  })

  it('ok to err', () => {
    const actual = Ok.new(100).andThen(() => Err.new('err')).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })

  it('err', () => {
    const actual = Err.new('err').andThen(n => Ok.new(n * 2)).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })
})
