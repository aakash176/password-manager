import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { api_base_url } from '../../config'
const Consent = () => {
  const user = useUser()
  console.log(user)
  const navigate = useNavigate()
  const handleClick = async (e) => {
    e.stopPropagation()
    const body = {
      userId: user?.user.id
    }
    console.log(body)
    const response = await axios.post(`${api_base_url}/user/register`, body)
    console.log(response.data)
    navigate('/home')
  }
  return (
    <>
      <SignedIn>
        <div className='flex flex-col items-center justify-center min-h-screen gap-5 bg-rose-800'>
          <div className='text-2xl text-white max-sm:text-lg max-sm:text-wrap text-center font-bold'>Your information is end to end encrypted and safe with us.</div>
          <span className=' max-sm:text-wrap text-center bg-white text-rose-800 font-mono rounded-lg'>
            By clicking "Continue," you'll be redirected to our main screen, where you can access exclusive features.
          </span>
          <button class="button-27" role="button" onClick={handleClick}>Continue</button>
        </div>
      </SignedIn>
      <SignedOut>
        <div className='flex flex-col items-center justify-center min-h-screen gap-5 bg-rose-800'>
          <div className='text-2xl text-white'>To take full advantage of our app's feature,
            please sign in or create an account. </div>

          <button class="button-27" role="button" onClick={() => navigate('/')}>Login/Register</button>
        </div>
      </SignedOut>
    </>
  )
}

export default Consent