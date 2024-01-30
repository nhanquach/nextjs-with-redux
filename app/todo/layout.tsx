import React from 'react'
import StoreProvider from '../StoreProvider'

const Layout = ({ children }: { childre: React.ReactNode }) => {
  return (
    <StoreProvider>
      <div className='p-8 bg-red-100'>{children}</div>
    </StoreProvider>
  )
}

export default Layout
