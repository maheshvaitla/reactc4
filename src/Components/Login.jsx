import { Button, Input, Stack } from "@chakra-ui/react"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login =()=>{

    
    const {handleToken} = useContext(AuthContext);

    const Navigate = useNavigate()


    return <div id="Login">
        <Stack spacing={3}>
     <Input variant='outline' placeholder='Email' />
     <Input variant='outline' placeholder='Password' />
     <Button colorScheme='teal' variant='solid'  onClick={()=>{
                handleToken("123");
                Navigate(-1)
            }}> Login </Button>
      </Stack>

    </div>
}