import React from 'react'
import { Select } from 'antd'

const { Option } = Select

interface Props {
  current: string
  onChange: (value: string) => void
  options: string[]
}

export const MySelect = ({ current, onChange, options }: Props) => {
  return (
    <Select
      defaultValue={current}
      showSearch
      style={{ width: '100%' }}
      placeholder='Select a current'
      optionFilterProp='children'
      onChange={onChange}
      filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      aria-label='currency picker'
    >
      {options?.map(el => (
        <Option key={el} value={el}>
          {el}
        </Option>
      ))}
    </Select>
  )
}
