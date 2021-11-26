import { CSSProperties } from 'react'

export interface Rates {
  [key: string]: string
}

export interface RowRendererProps {
  key: string
  index: number
  style: CSSProperties
}
