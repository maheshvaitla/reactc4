import { Button, Input, Stack } from "@chakra-ui/react"

export const Login =()=>{
    return <div id="Login">
        <Stack spacing={3}>
     <Input variant='outline' placeholder='Email' />
     <Input variant='outline' placeholder='Password' />
     <Button colorScheme='teal' variant='solid'> Login </Button>
      </Stack>

    </div>
}