import { customElements } from '../src/compiler/options'
import { assert } from './testUtils'

describe('mp-alipay: transform component', () => {
  test(`built-in component`, () => {
    const code = customElements.map((tag) => `<${tag}/>`).join('')
    assert(
      code,
      code,
      `(_ctx, _cache) => {
  return {}
}`
    )
  })
  test(`match-media`, () => {
    assert(
      `<match-media/>`,
      `<uni-match-media u-i="2a9ec0b0-0" onVI="__l"/>`,
      `(_ctx, _cache) => {
  return {}
}`
    )
  })
})