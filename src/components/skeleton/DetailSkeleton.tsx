import React from 'react'
import { Box, Flex, Skeleton, SkeletonText, useColorModeValue } from '@chakra-ui/react'

const DetailSkeleton = () => {
  const bg= useColorModeValue("#aaabac","#212953")
  return (
    <Flex flexDirection={["column","column","row"]} bg={bg}  justifyContent="space-between"  width={["95%","95%","90%"]} mx="auto" my="40px" p="20px">
         <Skeleton width={["95%","95%","350px"]} height="350px" />
         <Box padding="30px">
         <Skeleton width={["95%","95%","190px"]} height="40px" my="20px"/>
            <Flex py="25px" justifyContent="space-between" gap="40px">
            <SkeletonText width="230px" noOfLines={6}/>
            <SkeletonText width="230px" noOfLines={4}/>            
            </Flex>
            <Flex mt="10px">
                
            <SkeletonText width="90px" noOfLines={1} mt="12px"/> 
            <Skeleton width="80px" height="30px" ml="10px"/>
            <Skeleton width="80px" height="30px" mx="10px"/>
            <Skeleton width="80px" height="30px"/>
            </Flex>
         </Box>
    </Flex>
  )
}

export default DetailSkeleton