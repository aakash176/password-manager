import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  return (
    <SignIn path="/" routing="path" signUpUrl="/sign-up" />
  )
}

export default Signin