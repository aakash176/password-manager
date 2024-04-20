import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { api_base_url } from '../../config'
import axios from 'axios';
import { accountState } from '../context/store';
const Home = () => {
  const {accounts, setAccounts} = accountState()
  // const [accounts, setAccount] = useState([])
  const user = useUser()
  const navigate = useNavigate()
  console.log(user);
  // useEffect(()=>{
  //   const getData = async()=>{
  //     const body = {
  //       userId: "aak13dassu4"
  //     }
  //     const res = await axios.post(`${api_base_url}/account/get-password`, body)
  //     setAccounts(res.data)
  //     console.log(res);
  //   }
  //   getData()
  // },[user?.user?.id])
  const handleView = () =>{
    navigate('/search')
  }
  const handleAdd = () =>{
    navigate('/add-account')
  }
  return (
    <div className='bg-black w-full h-[100vh] home'>
      <SignOutButton className='text-white bg-rose-800 p-3 m-3 rounded-2xl max-sm:w-[100px] custom-btn' signOutCallback={() => navigate('/')}  />
      <div className='flex justify-center items-center min-h-screen gap-10 w-full h-[50%]'>
        <button className=" text-white bg-rose-800 p-3 m-3 rounded-2xl max-sm:w-[300px] custom-btn" role="button" onClick={handleAdd}>Add account</button>
        <button className=" text-white bg-rose-800 p-3 m-3 rounded-2xl max-sm:w-[300px] custom-btn" role="button" onClick={handleView}>View password</button>
      </div>
    </div>
  )
}

export default Home