import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setCurrent } from '../store/reducers/ActionCreators'
import { RowRendererProps } from '../types'
import { MySelect } from '../components/Select'
import { CurrencyList } from '../components/CurrencyList'
import { convert } from '../utils/convert'
import { Alert } from 'antd'

const Currency = () => {
  const { rates, current, error } = useAppSelector(state => state.currencyReducer)
  const dispatch = useAppDispatch()
  const options = Object.keys(rates)

  const onChange = (value: string) => {
    dispatch(setCurrent(value))
  }
  const rowRenderer = useCallback(
    ({ key, index, style }: RowRendererProps) => {
      const currentCurrency = options[index]
      const toRate = current?.toLocaleUpperCase()
      const fromRate = currentCurrency?.toLocaleUpperCase()
      const convertedValue = convert(rates, fromRate, toRate)?.toFixed(2)

      return (
        <Item style={style} key={key}>
          {convertedValue ? `1 ${currentCurrency} = ${convertedValue} ${current}` : 'error'}
        </Item>
      )
    },
    [current, options, rates]
  )

  if (error) {
    return <Alert message='Error' description={error} type='error' showIcon />
  }

  return (
    <>
      <MySelect current={current} onChange={onChange} options={options} />
      <CurrencyList options={options} rowRenderer={rowRenderer} />
    </>
  )
}

const Item = styled.div`
  color: var(--gray);
  font-size: 18px;
`

export default Currency
