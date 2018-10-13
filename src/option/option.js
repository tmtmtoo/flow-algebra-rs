// @flow

export type Option<T> = Some<T> | None

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

export class None {

  +unwrap: () => *

  constructor() {
    this.unwrap = () => {
      throw new Error('None value was unwraped')
    }
  }

  static new(): None {
    return new None()
  }

  // eslint-disable-next-line
  map<T, U: $NonMaybeType<*>>(f: T => U): Option<U> {
    return new None()
  }

  // eslint-disable-next-line
  mapOr<T, U: $NonMaybeType<*>>(defaults: U, f: T => U): U {
    return defaults
  }

  // eslint-disable-next-line
  mapOrElse<T, U: $NonMaybeType<*>>(defaults: () => U, f: T => U): U {
    return defaults()
  }

  // eslint-disable-next-line
  andThen<T, U>(f: T => Option<U>): Option<U> {
    return new None()
  }

  or<T>(optb: Option<T>): Option<T> {
    return optb
  }

  orElse<T>(f: () => Option<T>): Option<T> {
    return f()
  }

  unwrapOr<T>(def: T): T {
    return def
  }

  unwrapOrElse<T>(f: () =>T): T {
    return f()
  }

  isSome(): boolean {
    return false
  }

  isNone(): boolean {
    return true
  }
}
