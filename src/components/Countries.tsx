import { Flex } from '@chakra-ui/react'
import React from 'react'
import Country from './Country'

interface ICountries {
  countrie:any[]
}
const Countries = ({countrie}:ICountries )=> {
  return (
    <Flex justifyContent="space-between" wrap="wrap" width={["95%","95%","100%"]} margin="0 auto">
    {countrie?.map((country,index)=>{
      return <Country country={country} key={index}/>
    })
      
    }
    </Flex>
     
  )
   
  
}

export default Countries