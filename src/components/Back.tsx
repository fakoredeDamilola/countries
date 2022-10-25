import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Back = () => {

    
    const borders = useColorModeValue("#a7b3c4","#0e1832")
    const color = useColorModeValue("#09182e","#bfbfbf")
  return (
    <Link to="/">
        <Box bg={borders} boxShadow="2px 2px 2px black" mx="10px" padding="7px 15px" borderRadius="6px" color={color} my="8px" minWidth="120px" maxWidth="140px" textAlign="center"><ArrowBackIcon /> Back</Box>
    </Link>
  )
}

export default Back