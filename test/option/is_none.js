// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Some, None } from '../../src'

describe(__filename, () => {

  it('some', () => {
    const actual = Some.new(100).isNone()
    const expected = false
    assert.equal(actual, expected)
  })

  it('none', () => {
    const actual = None.new().isNone()
    const expected = true
    assert.equal(actual, expected)
  })
})
