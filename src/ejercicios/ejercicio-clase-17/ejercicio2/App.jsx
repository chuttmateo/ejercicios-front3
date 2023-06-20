import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

export default function App() {
  return (
    <>
    <Routes>
      <Route index element={<Index/>}/>
    </Routes>
    </>
  )
}
