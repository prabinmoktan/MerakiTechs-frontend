import React, { ReactNode } from 'react'
import TopNavbar from './TopNavbar'
import SideNavbar from './SideNavbar'



const Layout = ({children}:any) => {
  return (
    <>
    
    <div style={{background:"#0A142F",height:"100vh", width:"100vw", zIndex:"1"}}>
    
      <TopNavbar/>
      <SideNavbar/>
      <main>{children}</main>
      </div>
    </>
  )
}

export default Layout