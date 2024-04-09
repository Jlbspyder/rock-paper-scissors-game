import React from 'react'
import Footer from '../components/Footer'

const PageLayout = ({children}) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
