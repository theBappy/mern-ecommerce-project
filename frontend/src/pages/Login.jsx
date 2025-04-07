import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const {token, setToken, navigate } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async(event) =>{
    event.preventDefault()
    try{
      if(currentState === 'Sign up'){
        const response = await axios.post(`http://localhost:4000/api/user/register`, {name, email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast.error(response.data.message)
        }
      }else{
        const response = await axios.post(`http://localhost:4000/api/user/login`,{email, password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast.error(response.data.message)
        }
      }
    }catch(error){
     console.log(error)
     toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className='inline-flex items-center gap-2 mt-10'>
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState ==='Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800 required" onChange={(e)=>setName(e.target.value)}
      value={name} placeholder="your name" />}  
      <input onChange={(e)=>setEmail(e.target.value)}
      value={email} type="email" className="w-full px-3 py-2 border border-gray-800 required" placeholder="your email" />
      <input onChange={(e)=>setPassword(e.target.value)}
      value={password} type="password" className="w-full px-3 py-2 border border-gray-800 required" placeholder="enter your password" />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-gray-500">Forgot your password?</p>
        {
          currentState === 'Login' 
          ? <p className="cursor-pointer" onClick={()=>setCurrentState('Sign up')}>Create an account</p> 
          : <p className="cursor-pointer" onClick={()=>setCurrentState('Login')}>Login Here</p>
        }
      </div>
      <button className="bg-black hover:bg-black/70 cursor-pointer text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
    </form> 
  )
}

export default Login