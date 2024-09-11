import React from 'react'
import { Box , styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
const Heading = styled(Box)`
background: #1d1e22 ;
display:flex;
padding:9px 12px`
const Header = styled(Box)`
display:Flex;
background:#060606;
justify-content:space-between;
font-weight:700
`
const Editor = () => {
  return (
    <>
<Box>
    <Header>
    <Heading>
        <Box
        component="span"
        style={{backgroundColor:"red", height:"15px" , width:"20px" , display:"flex" ,placeContent:"center" , borderRadius:"5px"}}>/</Box>
        HTML
    </Heading>
    <CloseFullscreenIcon/>
    </Header>
    <Box></Box>
</Box>
    </>
  )
}

export default Editor
