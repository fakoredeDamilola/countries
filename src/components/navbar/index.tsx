import React from 'react'
import {Box,Flex,Text,useColorMode,useColorModeValue} from "@chakra-ui/react"
import {MoonIcon,SunIcon} from "@chakra-ui/icons"
const Header = () => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("light","dark");
    const SwitchIcon = useColorModeValue( SunIcon,MoonIcon);
  
  return (
    <Box padding="15px 0px" bg="#000C15" >
        <Flex justifyContent="space-between"color="white" width={["95%","95%","90%"]} margin="0 auto">
        <Text fontSize={["13px","13px","22px"]} mt={["5px","5px","0"]}>Where in the world?</Text>
        <Box>

            <Text cursor="pointer" mt={["0px","0px","4px"]} onClick={toggleColorMode} ><SwitchIcon mr="4px" mt="-3px" /> {text} Mode</Text>
        </Box>
    </Flex>
    </Box>
  
  )
}

export default Header