import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import FilterComponent from '../../components/filter/FilterComponent'
import { useQuery } from '@tanstack/react-query'
import CountrySkeleton from '../../components/skeleton/CountrySkeleton'
import Countries from '../../components/Countries'
import { useDebounce } from '../../hooks/useDebounce'
import Pagination from '../../components/filter/Pagination'

const Home = () => {

  const [filter, setFilter] = React.useState({
    region: '',
    search: ''
  })
  const [paginatedData, setPaginatedData] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  const searchValue = useDebounce(filter.search,500)
  const fetchCountries = async () =>{
   const data = searchValue ? await fetch(`https://restcountries.com/v3.1/name/${searchValue}?fullText=true`) : await fetch(`https://restcountries.com/v3.1/${filter.region ?`/region/${filter.region}` : "all"}`)
   const response = await data.json()
   return response
  }





  const {data,status,isLoading} = useQuery(['countries',searchValue,filter.region],fetchCountries )
  console.log({data,status,isLoading})

  useEffect(()=>{
    if(data){
      setPaginatedData(data.slice(0,20))
    }
  },[data])
  const reShuffleData = (page:number) =>{
    setCurrentPage(page)
    setPaginatedData(data &&data.slice(page*20,page*20+20))
  }

  return (
    <Box width={["95%","95%","90%"]} margin="auto" py={["20px","20px","35px"]}>
      <FilterComponent 
      setFilter={setFilter}
      filter={filter}/>
      <Box py="40px">
         {isLoading &&
      <Flex justifyContent="space-between" gap="20px" wrap="wrap" >

      {
        Array(20).fill('1').map((item,index) => {
          return (
            <CountrySkeleton key={index} />
          )
        })
      }
      </Flex>
      }
      {paginatedData && <Countries countrie={paginatedData} /> }
      <Pagination
      totalCount={data && data.length}
      pageSize={20}
      siblingCount={1}
      currentPage={currentPage}
      onPageChange={(page)=>reShuffleData(page)}

      />
      </Box>
     
    </Box>
  )
}

export default Home