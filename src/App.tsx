import React, { Suspense, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAppDispatch } from './hooks/redux'
import { fetchRates } from './store/reducers/ActionCreators'
import { MyLayout } from './components/Layout'
import { Spinner } from './components/Spinner'

const Convertation = React.lazy(() => import('./pages/Convertation'))
const Currency = React.lazy(() => import('./pages/Currency'))

export const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRates())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<MyLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Convertation />
            </Suspense>
          }
        />
        <Route
          path='currency'
          element={
            <Suspense fallback={<Spinner />}>
              <Currency />
            </Suspense>
          }
        />
        <Route path='spin' element={<Spinner />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  )
}
