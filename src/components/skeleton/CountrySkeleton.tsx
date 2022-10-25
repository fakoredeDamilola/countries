import React from 'react'
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
const CountrySkeleton = () => {
  return (
    <Box bg="#212953">
         <Skeleton width={["95%","95%","250px"]} height="200px" />
         <Box padding="30px">
            <SkeletonText noOfLines={1} width="120px"></SkeletonText>
            <Box py="25px">
            <SkeletonText width="160px"></SkeletonText>
            {/* <SkeletonText width="120px"></SkeletonText>
            <SkeletonText width="100px"></SkeletonText> */}
            </Box>
         </Box>
    </Box>
   
  )
}

export default CountrySkeleton