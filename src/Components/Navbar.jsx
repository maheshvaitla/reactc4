import { Button,  Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Navbar =()=>{
    return <div id='Navbar'>

<Stack direction='row' spacing={6} align='center'>
  <Button colorScheme='teal' variant='solid'><Link to="/dashboard">
    Dashboard</Link>
  </Button>
  <Button colorScheme='teal' variant='solid'><Link to="/admin">
    Admin</Link>
  </Button>
  <Button colorScheme='teal' variant='solid'><Link to="/login">
    Login</Link>
  </Button>
  
</Stack> 
        
    </div>
}