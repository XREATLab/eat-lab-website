import React from 'react'
import Header from './Header'
import PixelBanner from './PixelBanner'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <PixelBanner />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
