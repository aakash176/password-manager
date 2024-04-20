import React, { useEffect, useRef, useState } from 'react'
import { accountState } from '../context/store'
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { api_base_url } from '../../config';
const Search = () => {
  const [search, setSearch] = useState()
  const [edit, setedit] = useState(false)
  const { accounts, setAccounts } = accountState()
  const [accountName, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [accountError, setAccountError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [id, setid] = useState('')
  const [fail, setFail] = useState(false)
  const user = useUser()
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleAccountChange = (e) => {
    console.log(e.target.value);
    setAccountError(false)
    console.log(accountName)
    setAccount(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPasswordError(false)
    setPassword(e.target.value)
  }
  const getData = async () => {
    const body = {
      userId: user?.user?.id
    }
    const res = await axios.post(`${api_base_url}/account/get-password`, body)
    setAccounts(res.data)
    console.log(res);
  }
  useEffect(() => {
    
    getData()
  }, [user?.user?.id])

  const handleEdit = (acc) => {
    console.log(acc);
    setAccount(acc.accountName)
    setPassword(acc.password)
    setedit(true)
    setid(acc.id)
    console.log('id',id)
     
  }

  const handleUpdate = () => {
    console.log(accountName,password)
    const body = {id:id, accountName:accountName, password:password}
    console.log(body)
    axios.post(`${api_base_url}/account/update`,body ).then(() => getData())
    setedit(false)
  }

  const handleDelete = async(acc) => {
    console.log(acc)
    let body = {
      id: acc.id
    }
    axios.post(`${api_base_url}/account/delete`, body).then(() => getData())

  }
  return (
    <>
      <div className={`max-sm:min-h-screen max-sm:max-h-screen w-full bg-zinc-500 h-[100vh] relative ${edit ? 'blur-sm' : ''}`}>
        <div className='flex justify-center items-center'>
          <input value={search} className='w-[400px] h-[50px] bg-black text-white border-none mt-10 max-sm:w-[200px] border-transparent outline-none max-md:w-[40%]' placeholder='Type account name' onChange={handleChange} />
        </div>
        <div className=' flex flex-col justify-center items-center mt-10 object-contain gap-5'>
          {
            search != '' && accounts.filter((a) => a.accountName.includes(search)).map((acc, key) => (
              <div className='flex gap-10 items-center justify-center w-full max-md:w-[90%] bg-sky-600 font-serif p-3'>
                <div className='font-bold text-2xl text-black max-sm:text-lg'>{acc.accountName}</div>
                <div className='text-rose-800 font-bold mt-2 max-sm:text-sm'>{acc.password}</div>
                <div className='flex justify-center items-center gap-5'>
                  <FaEdit className='text-lg cursor-pointer' onClick={() => handleEdit(acc)} />
                  <MdDelete className='text-lg cursor-pointer' onClick={() => handleDelete(acc)}/>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      
      {
        edit && (
          <div className='absolute top-[20%] left-[28%] w-[600px] max-sm:w-[300px] max-sm:left-[15%] h-[500px] rounded-md bg-orange-600 transition-all duration-200 inset-0 ease-in-out'>
            {/* <div className='w-[50%]' style={{ display: sucess ? 'block' : 'none' }}>
              {
                sucess && <Alert variant={variants.success} setDisplay={setSucess} />

              }
            </div>
            <div className='w-[50%]' style={{ display: sucess ? 'block' : 'none' }}>
              {
                fail && <Alert variant={variants.failure} setDisplay={setFail} />
              }
            </div> */}
            <div className='flex justify-end '>
              <div className='flex p-5 text-white bg-black w-[20px] h-[20px] items-center justify-center cursor-pointer' onClick={() => setedit(false)}>X</div>
            </div>
            <div className='flex gap-10 justify-center items-center flex-col mt-10 max-sm:mt-20'>
              <TextField error={accountError ? true : false} value={accountName} helperText={accountError ? "Please provide account name" : ""} className='w-[80%] max-md:w-[40%] max-sm:w-[80%] border-none' id="outlined-basic" label="Account Name" variant="outlined" onChange={(event)=>handleAccountChange(event)} />
              <TextField error={passwordError ? true : false} value={password} helperText={passwordError ? "please provide password" : ""} className='w-[80%] max-sm:w-[80%] max-md:w-[40%]' id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange} />
              <button className=" text-white bg-rose-800 p-3 m-3 rounded-2xl max-sm:w-[300px] md:w-[200px] custom-btn" role="button" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        )
      }
    </>
  )

}

export default Search