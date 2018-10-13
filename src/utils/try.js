// @flow

import { Ok, Err } from '../result'

import type { Result } from '../result'

export class Try {

  static new<T>(f: () => T): Result<T, *> {
    try {
      const v = f()
      return Ok.new(v)
    } catch (e) {
      return Err.new(e)
    }
  }
}
