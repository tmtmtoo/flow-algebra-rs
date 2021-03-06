// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Some, None } from '../../src'

describe(__filename, () => {

  it('some', () => {
    const actual = Some.new(100).or(Some.new(200)).unwrapOr(10)
    const expected = 100
    assert.equal(actual, expected)
  })

  it('none to some', () => {
    const actual = None.new().or(Some.new(100)).unwrapOr(10)
    const expected = 100
    assert.equal(actual, expected)
  })

  it('none to none', () => {
    const actual = None.new().or(None.new()).unwrapOr(10)
    const expected = 10
    assert.equal(actual, expected)
  })
})
