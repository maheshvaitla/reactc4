import { Box, Button, List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react"

export const Dasboard =()=>{
    return <div id="Dashboard">
    <SimpleGrid columns={[3, null, 3]} spacing='40px'>
  <Box bg='tomato' height='120px'>
  <List spacing={3}>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Company Name :</b>Amazon
  </ListItem>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Job Title :</b>Software Developer
  </ListItem>
  <Button colorScheme='teal' variant='solid'>APPLY</Button>
  
</List>
  </Box>
  <Box bg='tomato' height='120px'>
  <List spacing={3}>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Company Name :</b>Google
  </ListItem>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Job Title :</b>Software Developer
  </ListItem>
  <Button colorScheme='teal' variant='solid'>APPLY</Button>
  
</List>
  </Box>

  <Box bg='tomato' height='120px'>
  <List spacing={3}>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Company Name :</b>Masai
  </ListItem>
  <ListItem>
    <ListIcon  color='green.500' />
    <b>Job Title :</b>Backend Developer
  </ListItem>
  <Button colorScheme='teal' variant='solid'>APPLY</Button>
  
</List>
  </Box>
  
  
</SimpleGrid>
    </div>
}