// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Some, None } from '../../src'

describe(__filename, () => {

  it('some', () => {
    const actual = Some.new(100).map(n => n * 2).unwrapOr(100)
    const expected = 200
    assert.equal(actual, expected)
  })

  it('none', () => {
    const actual = None.new().map(n => n * 2).isNone()
    const expected = true
    assert.equal(actual, expected)
  })
})
