import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react";
import { account } from "../pages/api/api";

const Signup = () => {
  const [userDetails, setUserDetail] = useState({
    userId: 'unique()',
    email: '',
    password: '',
    name: ''
  })

  const signupUser = async (e: any) => {
    e.preventDefault();
    
    try {
      const user = await account.create(
        userDetails.userId,
        userDetails.email,
        userDetails.password,
        userDetails.name
      );
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormControl mt={6}>
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input onChange={(e) => {
        setUserDetail({
          ...userDetails,
          name: e.target.value
        })
      }} id='name' type='text' />
      <FormLabel htmlFor='email'>Email address</FormLabel>
      <Input onChange={(e) => {
        setUserDetail({
          ...userDetails,
          email: e.target.value
        })
      }} id='email' type='email' />
      <FormLabel htmlFor='password'>Password</FormLabel>
      <Input onChange={(e) => {
        setUserDetail({
          ...userDetails,
          password: e.target.value
        })
      }} id='password' type='password' />
      <Button onClick={(e) => signupUser(e)} mt={4}
        colorScheme='teal' type="submit">Register</Button>
    </FormControl>
  )
}

export default Signup;