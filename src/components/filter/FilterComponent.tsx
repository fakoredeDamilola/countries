import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Input,Box, Flex, InputGroup, InputLeftElement, Menu, Button, MenuList, MenuItem, MenuButton } from '@chakra-ui/react'

interface IFilter {
  filter: {region:string,search:string};
  setFilter: React.Dispatch<React.SetStateAction<{region:string,search:string}>>;
}

const FilterComponent = ({filter,setFilter}:IFilter) => {
  return (
    <Flex justifyContent="space-between" flexDirection={["column","column","row"]} padding="0px 0">
          <Box>
            <InputGroup>
            <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon mt="4px" color='gray.300' />}
    />
            <Input
            placeholder="Search for a country..." 
            width={["100%","100%","350px"]}
            height="45px"
            onChange={(e:any)=>setFilter((filter)=>({...filter,search:e.target.value}))}
            background="#242F40"
            border="0"
            borderRadius="4px"
            boxShadow="3px 3px 3px #0a0823"
            px="15px"
        />
            </InputGroup>
        
    </Box>
          <Box mt={["35px","35px","0"]}>
          <Menu>
  <MenuButton as={Button} width="180px" height="45px" background="#242F40" rightIcon={<ChevronDownIcon />}>
    {filter?.region ? filter.region : "Filter by Region"}
  </MenuButton>
  <MenuList>
    {["Africa","America","Asia","Europe","Oceania"].map((region:string,index:number)=>(
      <MenuItem key={index} onClick={()=>setFilter((filter)=>({...filter,region}))}>{region}</MenuItem>
    ))}
    
  </MenuList>
</Menu>
    </Box>

    </Flex>
  
  )
}

export default FilterComponent