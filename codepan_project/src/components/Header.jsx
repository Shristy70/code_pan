import React from 'react'
import{ AppBar  , Toolbar}from '@mui/material';
import imag from "./images.png"
const Header = () => {
  return (
   <>
   <AppBar position='static'>
<Toolbar>
<img src={imag} alt="" style={{width:"50px" ,height:"50px" , borderRadius:"50%"}}/>
</Toolbar>
   </AppBar>
   </>
  )
}

export default Header
