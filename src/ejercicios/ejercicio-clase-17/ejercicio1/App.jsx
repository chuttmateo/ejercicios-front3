import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Posts from './pages/Posts'

export default function App() {
  return (
    <>
    <Routes>
        <Route index element={<Index />} />
        <Route path='/posts/:id' element={<Posts/>} />
    </Routes>
    </>
  )
}
