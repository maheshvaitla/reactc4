import { Button, Input, Stack } from "@chakra-ui/react"

export const Admin = ()=>{
    return <div id="Admin">
        <h1 style={{color:"green"}}>JOB LISTING</h1>
        <Stack spacing={3}>
  
  <Input variant='filled' placeholder='Company Name' />
  <Input variant='filled' placeholder='Job Title' />
  <Input variant='filled' placeholder='Salary Range' />
  <Input variant='filled' placeholder='Job Description' />
  <Input variant='filled' placeholder='Job Type' />
  <Button  colorScheme='teal' variant='solid'>JOB POST</Button>
  
</Stack>
    </div>
}