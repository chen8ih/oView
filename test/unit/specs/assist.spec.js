import { oneOf } from '@/utils/assist'

describe('oneOf', () => {
  it('should return true', () => {
    expect(oneOf(1, [1, 2, 3])).to.equal(true)
  })

  it('should return false', () => {
    expect(oneOf('a', ['1', 'b', 'adc'])).to.equal(false)
  })
})
