import { Box,Heading,Image, Text, useColorModeValue } from '@chakra-ui/react'
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils';


const Country = ({country}:{country:any}) => {
  const bg= useColorModeValue("#aaabac","#242F40")
  const color=useColorModeValue("#06092c","#bbbbbb")
  // console.log({country},country.flag)
  return (
    <Link to={`/${country.name.common}`}>
    <Box my="30px" bg={bg} cursor="pointer" width={["100%","100%","250px"]} >
      <Image src={country?.flags?.png} width="100%" objectFit="cover" height="200px" loading="lazy" alt={country.name.common} />
      <Box padding="25px 20px">
          <Heading as="h4" fontSize="17px" wordBreak="break-word">{country.name.common}</Heading>
          <Box>
            <Text my="3">Population: {numberWithCommas(country.population)}</Text>
            <Text my="3">Region: <Text as="span" color={color}>{country?.capital?.length >0 ? country?.capital[0]: country?.capital }</Text></Text>
            <Text my="3">Captial: <Text as="span" color={color}>{country.region}</Text></Text>
          </Box>
      </Box>
    
      {/* <LazyLoadImage src={country?.flags?.png}
        width={250} height={200}
        placeholderSrc={PlaceholderImage}
        alt={country.name.common}
        effect="blur"
      /> */}
    </Box>
    </Link>
    
  )
}

export default Country