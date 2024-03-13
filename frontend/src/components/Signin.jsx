import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const Signin = () => {

  useEffect(() => {
    localStorage.clear()
  },[])
  return (
    <SignIn path="/" routing="path" signUpUrl="/sign-up" />
  )
}

export default Signin