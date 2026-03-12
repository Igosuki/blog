import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
