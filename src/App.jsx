import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PortfolioForm from './pages/PortfolioForm'
import PortfolioPreview from './pages/PortfolioPreview'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<PortfolioForm/>} />
        <Route path='/preview' element={<PortfolioPreview/>} />
      </Routes>
    </div>
  )
}

export default App