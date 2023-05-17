import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../images/logo.png'
import board from '../images/board.png'
import home from '../images/home.png'
import men from '../images/men.png'
import plug from '../images/plug.png'
import frame from '../images/frame.png'
import Groups from '../images/Groups.png'


import reports from '../images/reports.png'
import  Service from '../images/Service.png'
import warranty from '../images/warranty.png'
const Sidebar = () => {
  return (
    <Box height={"1187px"} width={"160px"} boxShadow={" 4px 4px 8px -2px rgba(0, 79, 149, 0.25)"}>
<Image src={logo} mb={'14%'} mt={"5%"}/>
<Image mt={"100%"} ml={"18%"}src={Groups}/>

    </Box>
  )
}

export default Sidebar