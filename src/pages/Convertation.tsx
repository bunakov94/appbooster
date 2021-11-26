import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { Alert, Input } from 'antd'
import { useAppSelector } from '../hooks/redux'
import { convert } from '../utils/convert'

const Convertation = () => {
  const { rates, error } = useAppSelector(state => state.currencyReducer)
  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const [count, from, , to] = value.split(' ')

  const convertedValue = convert(rates, from, to, count)

  if (error) {
    return <Alert message='Error' description={error} type='error' showIcon />
  }

  return (
    <Container>
      <Input placeholder='15 usd in rub' value={value} onChange={onChange} />
      <div className='result'>
        <h1>Result</h1>
        {convertedValue ? (
          <h2>{`${count} ${from?.toUpperCase()} = ${convertedValue} ${to?.toUpperCase()}`}</h2>
        ) : (
          <p>Please enter your request</p>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  & > .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    height: 200px;
  }
`

export default Convertation
