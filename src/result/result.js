// @flow

import { Some, None } from '../'

import type { Option } from '../'

export type Result<T, E> = Ok<T, E> | Err<T, E>

export class Ok<T, E> {

  +unwrap: () => T

  constructor(unwrap: () => T) {
    this.unwrap = unwrap
  }

  static new(value: T): Result<T, E> {
    return new Ok(() => value)
  }

  map<U>(op: T => U): Result<U, E> {
    return new Ok(() => op(this.unwrap()))
  }

  and<U>(res: Result<U, E>): Result<U, E> {
    return res
  }

  andThen<U>(op: T => Result<U, E>): Result<U, E> {
    return op(this.unwrap())
  }

  // eslint-disable-next-line
  mapErr<F>(op: E => F): Result<T, F> {
    return new Ok(this.unwrap)
  }

  unwrapErr(): E {
    throw new Error('cannnot unwrap error')
  }

  // eslint-disable-next-line
  or<F>(res: Result<T, F>): Result<T, F> {
    return new Ok(this.unwrap)
  }

  // eslint-disable-next-line
  orElse<F>(op: E => Result<T, F>): Result<T, F> {
    return new Ok(this.unwrap)
  }

  // eslint-disable-next-line
  unwrapOr(optb: T): T {
    return this.unwrap()
  }

  // eslint-disable-next-line
  unwrapOrElse(op: E => T): T {
    return this.unwrap()
  }

  ok(): Option<T> {
    return new Some(this.unwrap)
  }

  err(): Option<E> {
    return new None()
  }

  isOk(): boolean {
    return true
  }

  isErr(): boolean {
    return false
  }
}

export class Err<T, E> {

  +unwrapErr: () => E

  constructor(unwrap_err: () => E) {
    this.unwrapErr = unwrap_err
  }

  static new(error: E): Result<T, E> {
    return new Err(() => error)
  }

  unwrap(): T {
    throw new Error('cannot unwrap')
  }

  // eslint-disable-next-line
  map<U>(op: T => U): Result<U, E> {
    return new Err(this.unwrapErr)
  }

  // eslint-disable-next-line
  and<U>(res: Result<U, E>): Result<U, E> {
    return new Err(this.unwrapErr)
  }

  // eslint-disable-next-line
  andThen<U>(op: T => Result<U, E>): Result<U, E> {
    return new Err(this.unwrapErr)
  }

  mapErr<F>(op: E => F): Result<T, F> {
    return new Err(() => op(this.unwrapErr()))
  }

  or<F>(res: Result<T, F>): Result<T, F> {
    return res
  }

  orElse<F>(op: E => Result<T, F>): Result<T, F> {
    return op(this.unwrapErr())
  }

  unwrapOr(optb: T): T {
    return optb
  }

  unwrapOrElse(op: E => T): T {
    return op(this.unwrapErr())
  }

  ok(): Option<T> {
    return new None()
  }

  err(): Option<E> {
    return new Some(this.unwrapErr)
  }

  isOk(): boolean {
    return false
  }

  isErr(): boolean {
    return true
  }
}
