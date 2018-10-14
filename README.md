# flow-algebra-rs [![CircleCI](https://circleci.com/gh/tmtmtoo/flow-algebra-rs/tree/develop.svg?style=shield&circle-token=368f268c7a575e9df457ef82b3071ead8082e263)](https://circleci.com/gh/tmtmtoo/flow-algebra-rs/tree/develop)

Flow implementations of Rust `Option<T>` `Result<T, E>`.

## Install
```sh
$ npm install --save flow-algebra-rs
```

## API implementation status
### [Option](https://doc.rust-lang.org/stable/std/option/)
- [x] [is_some](https://doc.rust-lang.org/std/option/enum.Option.html#method.is_some)
- [x] [is_none](https://doc.rust-lang.org/std/option/enum.Option.html#method.is_none)
- [x] [unwrap](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap)
- [x] [unwrap_or](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap_or)
- [x] [unwrap_or_else](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap_or_else)
- [x] [map](https://doc.rust-lang.org/std/option/enum.Option.html#method.map)
- [x] [map_or](https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or)
- [x] [map_or_else](https://doc.rust-lang.org/std/option/enum.Option.html#method.map_or_else)
- [ ] [ok_or](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or)
- [ ] [ok_or_else](https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or_else)
- [ ] [and](https://doc.rust-lang.org/std/option/enum.Option.html#method.and)
- [x] [and_then](https://doc.rust-lang.org/std/option/enum.Option.html#method.and_then)
- [ ] [filter](https://doc.rust-lang.org/std/option/enum.Option.html#method.filter)
- [x] [or](https://doc.rust-lang.org/std/option/enum.Option.html#method.or)
- [x] [or_else](https://doc.rust-lang.org/std/option/enum.Option.html#method.or_else)
- [ ] [take](https://doc.rust-lang.org/std/option/enum.Option.html#method.take)

### [Result](https://doc.rust-lang.org/stable/std/result/)
- [x] [is_ok](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_ok)
- [x] [is_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_err)
- [ ] [ok](https://doc.rust-lang.org/std/result/enum.Result.html#method.ok)
- [ ] [err](https://doc.rust-lang.org/std/result/enum.Result.html#method.err)
- [x] [map](https://doc.rust-lang.org/std/result/enum.Result.html#method.map)
- [x] [map_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_err)
- [ ] [and](https://doc.rust-lang.org/std/result/enum.Result.html#method.and)
- [x] [and_then](https://doc.rust-lang.org/std/result/enum.Result.html#method.and_then)
- [x] [or](https://doc.rust-lang.org/std/result/enum.Result.html#method.or)
- [x] [or_else](https://doc.rust-lang.org/std/result/enum.Result.html#method.or_else)
- [x] [unwrap_or](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or)
- [x] [unwrap_or_else](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or_else)
- [x] [unwrap](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap)
- [x] [unwrap_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_err)

*Note: flow-algebra-rs APIs are provided as `camelCase`.*

## Usage

```js
// @flow

import { Some, Ok } from 'flow-algebra-rs'

import type { Option, Result } from 'flow-algebra-rs'

const option: Option<number> = Some.new(10)

const result: Result<number, string> = Ok.new(10)
```

## Utility
Null-safe and Exception-safe programming helper utilities are available.

#### Option
```js
// @flow

import { Optional } from 'flow-algebra-rs/utils'

const nullableVaule: ?number = null

const value = Optional.new(nullableValue)
  .map(n => n * 2)
  .unwrapOr(0)

console.log(`value is ${value}`) // value is 0
```

#### Result
```js
// @flow

import { Try } from 'flow-algebra-rs/utils'

const invalidJSON = 'to be error'

const value = Try.new((): {n: number} => JSON.parse(invalidJSON))
  .map(json => json.n * 2)
  .unwrapOr(0)

console.log(`value is ${value}`) // value is 0
```
