import React from 'react'

const Edit = ({ accountName,password,id }) => {
    const accountName = useRef(acc.accountName)
    const password = useRef(acc.password)
    const [accountError, setAccountError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [fail, setFail] = useState(false)
    const handleAccountChange = (e) => {
        setAccountError(false)
        accountName.current = e.target.value
    }
    const handlePasswordChange = (e) => {
        setPasswordError(false)
        password.current = e.target.value
    }


    const handleSumbit = async (e) => {
        e.preventDefault()
        console.log(typeof accountName.current)
        console.log(typeof password.current)
        if (typeof accountName.current == 'object' || accountName.current.length == 0) {
            setAccountError(true)
        }
        if (typeof password.current == 'object' || password.current.length == 0) {
            setPasswordError(true)
        }
        if (typeof accountName.current == 'string' && typeof password.current == 'string' && accountName.current.length > 0 && password.current.length > 0) {
            try {

                let obj = { "userId": user?.user?.id, "accountName": accountName.current, "password": password.current }
                console.log(obj);
                const res = await axios.post(`${api_base_url}/account/add-account`, obj)
                if (res.status == 200) {
                    setSucess(true)
                }
                else {
                    setFail(true)
                }
            } catch (error) {
                console.log("error in saving data", error)
            }
        }
    }
    return (
        <>
            <div className='w-[50%]' style={{ display: sucess ? 'block' : 'none' }}>
                {
                    sucess && <Alert variant={variants.success} setDisplay={setSucess} />

                }
            </div>
            <div className='w-[50%]' style={{ display: sucess ? 'block' : 'none' }}>
                {
                    fail && <Alert variant={variants.failure} setDisplay={setFail} />
                }
            </div>

            <div className='flex gap-10 justify-center items-center flex-col mt-10 max-sm:mt-20'>
                <TextField error={accountError ? true : false} ref={accountName} helperText={accountError ? "Please provide account name" : ""} className='w-[20%] max-md:w-[40%] max-sm:w-[80%]' id="outlined-basic" label="Account Name" variant="outlined" onChange={handleAccountChange} />
                <TextField error={passwordError ? true : false} ref={password} helperText={passwordError ? "please provide password" : ""} className='w-[20%] max-sm:w-[80%] max-md:w-[40%]' id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange} />
                <button className=" text-white bg-rose-800 p-3 m-3 rounded-2xl max-sm:w-[300px] md:w-[200px] custom-btn" role="button" onClick={handleSumbit}>Update</button>
            </div>
        </>

    )
}

export default Edit