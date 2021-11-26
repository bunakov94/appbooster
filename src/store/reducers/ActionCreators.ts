import { AppDispatch } from '../store'
import { currencySlice } from './CurrencySlice'
import { Rates } from '../../types'
import Http from '../../utils/http'

interface RatesResponse {
  success: boolean
  error: {
    code: number
    info: string
    type: string
  }
  timestamp: number
  base: string
  date: Date
  rates: Rates
}

export const fetchRates = () => async (dispatch: AppDispatch) => {
  const secret = process.env.REACT_APP_CURRENCY_SECRET_KEY || ''
  try {
    dispatch(currencySlice.actions.ratesFetching())
    const response = await Http.get<RatesResponse>(`latest?access_key=${secret}&format=1`)
    const { rates, error } = response.data
    if (error) {
      dispatch(currencySlice.actions.ratesFetchingError(error.info))
      return
    }
    dispatch(currencySlice.actions.ratesFetchingSuccess(rates))
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(currencySlice.actions.ratesFetchingError(e.message))
    }
  }
}

export const setCurrent = (value: string) => (dispatch: AppDispatch) => {
  dispatch(currencySlice.actions.setCurrent(value))
}
