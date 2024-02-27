import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignOutButton } from "@clerk/clerk-react";
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
       <SignOutButton signOutCallback={() => navigate('/')} />
    </div>
  )
}

export default Home