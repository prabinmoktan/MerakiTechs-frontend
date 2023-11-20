import { Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'

const TopNavbar = () => {
  return (
    <>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#0A142F",
          // background:" rgb(2,0,36)",
          zIndex:"1",
          position:"fixed",
          width:"100vw"
        }}
       className='sidebar-border'
      >
        <Toolbar sx={{ width: "50%", left:"100px" }}>
          <Image src={logo} alt="logo" width={90} height={77} />
          <Typography sx={{ fontSize: "25px", color: "white" }}>
            Meraki Techs
          </Typography>
        </Toolbar>

        <Toolbar
          sx={{
            justifyContent: "space-evenly",
            width: "40%",
            textDecoration: "none",
            // backgroundColor: "#223A75",
          }}
          className="rounded-border topbar"
        >
          <Link href={"/"} className="link-item">
            Home
          </Link>
          <Link href={"/about"} className="link-item">
            About us
          </Link>
          <Link href={"/Contact"} className="link-item">
          Contact 
          </Link>
          <Link href={"/Career"} className="link-item">
            Career
          </Link>
        </Toolbar>
      </div>
    </>
  )
}

export default TopNavbar