import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Alert = ({variant,setDisplay}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        setDisplay(false)
        navigate('/home')
    }
  return (
    <div className='w-[30%] h-[7%] ml-20 flex items-center gap-5 max-sm:w-[90%] top-[50%] left-[30%] max-sm:left-[0%] max-sm:ml-1' style={{background:variant.mainColor, position:'absolute'}}>
        <img src={variant.image} width={50} height={50} className='p-2' />
        <p className='font font-mono flex'>{variant.label}</p>
        <div className='text-lg bg-white cursor-pointer'>
            <RxCross2 onClick={handleClick} />

        </div>
    </div>
  )
}

export default Alert