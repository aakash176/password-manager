import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
const Consent = () => {
    const navigate = useNavigate()
    const handleClick = (e) => {
      e.stopPropagation()
      navigate('/')
    }
  return (
    <>
    <SignedIn>
      <div className='flex flex-col justify-center items-center gap-5'>
          <div className='text-xl'>Your information is end to end encrypted and safe with us.</div>
          <span>
              Click ok to continue
          </span>
          <button className='p-5 bg-indigo-700 rounded-3xl ' onClick={handleClick}>Ok</button>
      </div>
    </SignedIn>
    <SignedOut>
      <h1>Page not found.</h1>
    </SignedOut>
    </>
  )
}

export default Consent