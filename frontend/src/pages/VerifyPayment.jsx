import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const VerifyPayment = () => {
  const { navigate, setCartItems, token } = useContext(ShopContext)

  const [searchParams,setSearchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async() =>{
    try{
        if(!token){
            return null;
        }
        const response = await axios.post(`http://localhost:4000/api/order/verifyStripe`, {success, orderId}, {headers: {token}})

        if(response.data.success){
            setCartItems({})
            navigate('/orders')
        }else{
            navigate('/cart')
            toast.error(response.data.message)
        }
    }catch(error){
        console.log(error)
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    verifyPayment()
  },[token])


  return (
    <div>
        
    </div>
  )
}

export default VerifyPayment