import { withinErrorMargin } from '@/utils/number'

describe('withinErrorMargin', () => {
  it('should return false', () => {
    let i = withinErrorMargin(0.00000000001, 0.0000000000123)
    expect(i).to.equal(false)
  })

  it('should return true', () => {
    let i = withinErrorMargin(0.1 + 0.2, 0.3)
    expect(i).to.equal(true)
  })
})
