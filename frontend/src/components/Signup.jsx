import { SignUp } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const Signup = () => {
  useEffect(() => {
    localStorage.clear()
  },[])
  return (
    <SignUp path='/sign-up' />
  )
}

export default Signup