// @flow

export type Result<T, E> = Ok<T> | Err<E>

export class Ok<T> {

  +unwrap: () => T

  constructor(unwrap: () => T) {
    this.unwrap = unwrap
  }

  static new(value: T): Result<T, *> {
    return new Ok(() => value)
  }

  map<U>(op: T => U): Result<U, *> {
    return new Ok(() => op(this.unwrap()))
  }

  andThen<U, E>(op: T => Result<U, E>): Result<U, E> {
    return op(this.unwrap())
  }

  // eslint-disable-next-line
  mapErr<E, F>(op: E => F): Result<T, F> {
    return new Ok(this.unwrap)
  }

  unwrapErr<E>(): E {
    throw new Error('cannnot unwrap error')
  }

  // eslint-disable-next-line
  or<F>(res: Result<T, F>): Result<T, F> {
    return new Ok(this.unwrap)
  }

  // eslint-disable-next-line
  orElse<E, F>(op: E => Result<T, F>): Result<T, F> {
    return new Ok(this.unwrap)
  }

  // eslint-disable-next-line
  unwrapOr(optb: T): T {
    return this.unwrap()
  }

  // eslint-disable-next-line
  unwrapOrElse<E>(op: E => T): T {
    return this.unwrap()
  }

  isOk(): boolean {
    return true
  }

  isErr(): boolean {
    return false
  }
}

export class Err<E> {

  +unwrapErr: () => E

  constructor(unwrap_err: () => E) {
    this.unwrapErr = unwrap_err
  }

  static new(error: E): Result<*, E> {
    return new Err(() => error)
  }

  unwrap<T>(): T {
    throw new Error('cannot unwrap')
  }

  // eslint-disable-next-line
  map<T, U>(op: T => U): Result<U, E> {
    return this
  }

  // eslint-disable-next-line
  andThen<T, U>(op: T => Result<U, E>): Result<U, E> {
    return new Err(this.unwrapErr)
  }

  mapErr<F>(op: E => F): Result<*, F> {
    return new Err(() => op(this.unwrapErr()))
  }

  or<T, F>(res: Result<T, F>): Result<T, F> {
    return res
  }

  orElse<T, F>(op: E => Result<T, F>): Result<T, F> {
    return op(this.unwrapErr())
  }

  unwrapOr<T>(optb: T): T {
    return optb
  }

  unwrapOrElse<T>(op: E => T): T {
    return op(this.unwrapErr())
  }

  isOk(): boolean {
    return false
  }

  isErr(): boolean {
    return true
  }
}
