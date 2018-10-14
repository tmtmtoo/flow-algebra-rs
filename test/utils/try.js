// @flow

declare var describe: Function
declare var it: Function

import assert from 'assert'
import { Try } from '../../src/utils'

describe(__filename, () => {

  it('ok', () => {
    const json = '{"n": 10}'
    const actual = Try.new((): {|n: number|} => JSON.parse(json)).unwrap()
    const expected = 10
    assert.equal(actual.n, expected)
  })

  it('err', () => {
    const json = 'to be err'
    const actual = Try.new((): {|n: number|} => JSON.parse(json)).unwrapOr({n: 200})
    const expected = 200
    assert.equal(actual.n, expected)
  })
})
