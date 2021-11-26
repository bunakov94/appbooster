import { Rates } from '../types'

export const convert = (rates: Rates, from: string, to: string, count = '1') => {
  const fromRate = rates[from?.toLocaleUpperCase()]
  const toRate = rates[to?.toLocaleUpperCase()]

  if (fromRate && toRate) {
    return +((+count / +fromRate) * +toRate).toFixed(2)
  }
  return null
}
