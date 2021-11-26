import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

export const Spinner = () => {
  return (
    <MySpinner>
      <Spin />
    </MySpinner>
  )
}

const MySpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
