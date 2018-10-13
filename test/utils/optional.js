// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Optional } from '../../src'

describe(__filename, () => {

  it('some', () => {
    const actual = Optional.new(100).unwrapOr(200)
    const expected = 100
    assert.equal(actual, expected)
  })

  it('none', () => {
    const actual = Optional.new(null).unwrapOr(200)
    const expected = 200
    assert.equal(actual, expected)
  })
})
