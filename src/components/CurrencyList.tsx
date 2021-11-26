import React from 'react'
import { AutoSizer, List } from 'react-virtualized'
import { RowRendererProps } from '../types'

interface Props {
  options: string[]
  rowRenderer: (props: RowRendererProps) => JSX.Element
}

export const CurrencyList = ({ options, rowRenderer }: Props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '70vh',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <AutoSizer>
        {({ width, height }) => (
          <List width={width} height={height} rowHeight={40} rowCount={options?.length} rowRenderer={rowRenderer} />
        )}
      </AutoSizer>
    </div>
  )
}
