import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [token, setToken] = useState('')

  const addToCart = async(itemId, size)=>{
    if(!size){
      toast.error('Please select product size');
      return;
    }
    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }
      else {
         cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }

  const getCartCount = () =>{
    let totalCount = 0 ;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item]>0){
            totalCount += cartItems[items][item];
          }
        }catch(error){
          console.error('Error counting cart items.')
        }
      }
    }
    return totalCount;
  }

  
  const updateQuantity = async(itemId, size, quantity) =>{
    let cartData = structuredClone(cartItems)

    cartData[itemId][size] = quantity;

    setCartItems(cartData)
  }

  const getCartAmount = ()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items)
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item] >0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        }catch(error){
          console.error('Error calculating total amount of the cart')
        }
      }
    }
    return totalAmount;
  }

  

  useEffect(() => {
    fetch("http://localhost:4000/api/product/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Products not found in the response:", data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  },[])
  

  

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    showSearch,
    setSearch, 
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
