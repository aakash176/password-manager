import React, { useEffect, useState } from 'react'
import { accountState } from '../context/store'
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import { api_base_url } from '../../config';
const Search = () => {
    const [search, setSearch] = useState()
    const {accounts, setAccounts} = accountState()
    const user = useUser()
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(()=>{
        const getData = async()=>{
          const body = {
            userId: user?.user?.id
          }
          const res = await axios.post(`${api_base_url}/account/get-password`, body)
          setAccounts(res.data)
          console.log(res);
        }
        getData()
      },[user?.user?.id])
    console.log(accounts);
  return (
    <div className='w-full bg-zinc-100 h-[100vh]'>
        <div className='flex justify-center items-center'>
            <input value={search} className='w-[400px] h-[50px] border-none mt-10 max-sm:w-[200px] border-spacing-1 border-rose-800 text-rose-800' placeholder='Type account name' onChange={handleChange}/>
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
            {
                search != '' && accounts.filter((a)=> a.accountName.includes(search)).map((acc,key) => (
                    <div className='flex gap-10'>
                        <div className='font-bold text-2xl text-rose-800'>{acc.accountName}</div>
                        <div className='text-rose-800 font-bold mt-2'>{acc.password}</div>
                    </div>
                        
                ))
            }
        </div>
    </div>
  )
}

export default Search