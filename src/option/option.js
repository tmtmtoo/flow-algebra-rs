// @flow

export type Option<T> = Some<T> | None<T>

export class Some<T> {

  +unwrap: () => T

  static new(value: T): Option<T> {
    return new Some(() => value)
  }

  constructor(unwrap: () => T) {
    this.unwrap = unwrap
  }

  map<U: $NonMaybeType<*>>(f: T => U): Option<U> {
    return new Some(() => f(this.unwrap()))
  }

  mapOr<U: $NonMaybeType<*>>(defaults: U, f: T => U): U {
    return f(this.unwrap())
  }

  mapOrElse<U: $NonMaybeType<*>>(defaults: () => U, f: T => U): U {
    return f(this.unwrap())
  }

  andThen<U>(f: T => Option<U>): Option<U> {
    return f(this.unwrap())
  }

  // eslint-disable-next-line
  or(optb: Option<T>): Option<T> {
    return new Some(this.unwrap)
  }

  // eslint-disable-next-line
  orElse(f: () => Option<T>): Option<T> {
    return new Some(this.unwrap)
  }

  // eslint-disable-next-line
  unwrapOr(def: T): T {
    return this.unwrap()
  }

  // eslint-disable-next-line
  unwrapOrElse(f: () =>T): T {
    return this.unwrap()
  }

  isSome(): boolean {
    return true
  }

  isNone(): boolean {
    return false
  }
}

export class None<T> {

  +unwrap: () => T

  constructor() {
    this.unwrap = () => {
      throw new Error('None value was unwraped')
    }
  }

  static new(): None<T> {
    return new None()
  }

  // eslint-disable-next-line
  map<U: $NonMaybeType<*>>(f: T => U): Option<U> {
    return new None()
  }

  // eslint-disable-next-line
  mapOr<U: $NonMaybeType<*>>(defaults: U, f: T => U): U {
    return defaults
  }

  // eslint-disable-next-line
  mapOrElse<U: $NonMaybeType<*>>(defaults: () => U, f: T => U): U {
    return defaults()
  }

  // eslint-disable-next-line
  andThen<U>(f: T => Option<U>): Option<U> {
    return new None()
  }

  or(optb: Option<T>): Option<T> {
    return optb
  }

  orElse(f: () => Option<T>): Option<T> {
    return f()
  }

  unwrapOr(def: T): T {
    return def
  }

  unwrapOrElse(f: () =>T): T {
    return f()
  }

  isSome(): boolean {
    return false
  }

  isNone(): boolean {
    return true
  }
}
