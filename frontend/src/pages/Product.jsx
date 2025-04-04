import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll  justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] flex-shrink-0 cursor-pointer sm:w-full sm:mb-3]"
                alt="product_image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="product_first_image"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star_icon" className="w- 35" />
            <img src={assets.star_icon} alt="star_icon" className="w- 35" />
            <img src={assets.star_icon} alt="star_icon" className="w- 35" />
            <img src={assets.star_icon} alt="star_icon" className="w- 35" />
            <img
              src={assets.star_dull_icon}
              alt="star_dull_icon"
              className="w- 35"
            />
            <p className="pl-2">(135)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-4 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 border-gray-100 bg-gray-100 ${
                    item === size ? "border-orange-300" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white  px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5 text-gray-200" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7-days</p>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div className="mt-20">
              <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm ">Description</b>
          <p className="border border-gray-200 px-5 py-3 text-s">Reviews (155)</p>
              </div>
              <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia illo quae dicta soluta doloremque modi, rem minus sed eveniet voluptatem commodi autem ullam labore aperiam in facere neque et? Consequatur officiis et delectus, soluta doloremque adipisci minus quaerat, a asperiores aperiam vitae? Recusandae, vitae! Mollitia, laboriosam non. Aspernatur modi quia est perferendis aperiam iusto id maiores adipisci veniam similique.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis voluptatum laboriosam, nobis beatae, ex nulla perspiciatis cumque animi nam officiis quod ab quis voluptas. Tempore, soluta explicabo omnis aut nesciunt ut, voluptatem delectus atque, modi vitae quos velit! Iste!</p>
              </div>
      </div>
      {/* display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
