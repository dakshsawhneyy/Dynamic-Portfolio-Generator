import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PortfolioForm from './pages/PortfolioForm.jsx'
import PortfolioPreview from './pages/PortfolioPreview.jsx'
import TemplateOne from './templates/TemplateOne.jsx'
import TemplateTwo from './templates/TemplateTwo.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PortfolioForm/>} />
        <Route path='/preview' element={<PortfolioPreview/>} />
        <Route path='/template1' element={<TemplateOne/>} />
        <Route path='/template2' element={<TemplateTwo/>} />
      </Routes>
    </div>
  )
}

export default App