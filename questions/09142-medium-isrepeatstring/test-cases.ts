import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRepeatString<'abc'>, false>>,
  Expect<Equal<IsRepeatString<'abb'>, true>>,
  Expect<Equal<IsRepeatString<'cbc'>, true>>,
  Expect<Equal<IsRepeatString<''>, false>>
]
