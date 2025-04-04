import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
  return (
    <div>BestSeller</div>
  )
}

export default BestSeller