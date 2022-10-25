import { Box, Flex, Grid, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import Back from '../../components/Back'
import DetailSkeleton from '../../components/skeleton/DetailSkeleton'
import { numberWithCommas } from '../../utils'

const Detail = () => {
  const countryName = useParams().country
    const borders = useColorModeValue("#a7b3c4","#0e1832")
    const color = useColorModeValue("#0e0147","#bfbfbf")
    const fetchCounty = async () =>{
     const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
     const response = await data.json()
     return response
    }
  
    const {data,status,isLoading} = useQuery(['countries'],fetchCounty )
    const country= data ?data[0] : null
    
  if(isLoading){
    return <DetailSkeleton />
  }else if(data){
    return (
      <Box width={["95%","95%","90%"]} margin="auto" py={["20px","20px","35px"]}>
        <Back />
      {country ? (<Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} py={["50px","50px","70px"]} margin="auto">
        <Box>
        <Image src={country?.flags?.png} width={["100%","100%","80%"]} objectFit="cover" height={["200px","200px","auto"]} loading="lazy" alt={country.name.common} />
        </Box>
        <Box py="30px">
        <Heading as="h1" fontSize="28px">{country.name.common}</Heading>
        <Flex flexDirection={["column","column","row",]} justifyContent="space-between" gap="30px" my="30px">
           <Box>
          <Text>Native name: <Text as="span" color={color} my="8px">{country?.name?.nativeName[Object.keys(country?.languages)[0]].official}</Text></Text>
          <Text>Population: <Text as="span" color={color} my="8px">{numberWithCommas(country?.population)}</Text></Text>
          <Text>Region: <Text as="span" color={color} my="8px">{country?.region}</Text></Text>
          <Text>Sub Region: <Text as="span" color={color} my="8px">{country?.subregion}</Text> </Text>
          <Text>Capital: <Text as="span" color={color} my="8px">{country?.capital[0]}</Text> </Text>
        </Box>
        <Box>
          <Text>Top Level Domain: <Text as="span" color={color}>{country?.tld[0]}</Text></Text>
          <Text>Currencies: <Text as="span" color={color} my="8px">{country?.currencies[Object.keys(country?.currencies)[0]].name}</Text></Text>
          <Text>Languages:  {Object.keys(country?.languages).map((lang,index)=>(
            <Text as="span" key={index} color={color} my="8px">{country?.languages[lang]} , </Text>
          ))

          }</Text>
          
        </Box>

        </Flex>
      {country?.borders?.length >0 && <Flex flexDirection={["column","column","row"]} >
<Text mr="20px" mt="13px">Border Countries :</Text>
<Flex wrap="wrap">
 {
  country?.borders?.map((border:string,index:number)=>(
    <Box bg={borders} boxShadow="2px 2px 2px black" mx="10px" padding="7px 15px" borderRadius="6px" key={index} color="#bfbfbf" my="8px" minWidth="120px" textAlign="center">{border}</Box>
  ))
} 
</Flex>


       </Flex>}
        </Box>
      </Grid>):
      (<div>Country not found</div>)
      }
      </Box>
     
    )
  }
}

export default Detail