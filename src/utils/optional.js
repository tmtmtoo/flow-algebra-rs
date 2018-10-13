// @flow

import { Some, None } from '../option'

import type { Option } from '../option'

export class Optional {

  static new<T>(value: ?T): Option<T> {
    return (value === null || value === undefined)
      ? new None()
      : new Some(() => value)
  }
}
