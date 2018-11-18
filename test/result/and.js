// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Ok, Err } from '../../src'

describe(__filename, () => {

  it('ok and ok', () => {
    const actual = Ok.new(100).and(Ok.new(200)).unwrap()
    const expected = 200
    assert.equal(actual, expected)
  })

  it('ok and err', () => {
    const actual = Ok.new(100).and(Err.new('err')).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })

  it('err and ok', () => {
    const actual = Err.new('err').and(Ok.new(100)).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })

  it('err and err', () => {
    const actual = Err.new('err').and(Err.new('err2')).unwrapErr()
    const expected = 'err'
    assert.equal(actual, expected)
  })
})
