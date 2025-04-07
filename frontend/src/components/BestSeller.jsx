import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem"; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  
  const [bestSeller, setBestSeller] = useState([]);


  useEffect(() => {
    if (Array.isArray(products)) {
      setBestSeller(products.slice(0, 20)); 
    } else {
      console.error("Products is not an array:", products); 
    }
  }, [products]);
  
  



  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          asperiores deleniti, minima cum dicta iusto vel atque odit fugiat
          quas.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
