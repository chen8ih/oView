import { withinErrorMargin } from '@/utils/number'

describe('it should return true', () => {
  withinErrorMargin(0.00000000001, 0.0000000000123)
})
