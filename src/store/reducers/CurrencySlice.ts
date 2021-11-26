import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Rates } from '../../types'

interface CurrencyState {
  rates: Rates
  isLoading: boolean
  error: string
  current: string
}

const initialState: CurrencyState = {
  rates: {},
  isLoading: false,
  error: '',
  current: 'RUB',
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    ratesFetching(state) {
      state.isLoading = true
    },
    ratesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    ratesFetchingSuccess(state, action: PayloadAction<Rates>) {
      state.isLoading = false
      state.error = ''
      state.rates = action.payload
    },
    setCurrent(state, action: PayloadAction<string>) {
      state.current = action.payload
    },
  },
})

export default currencySlice.reducer
