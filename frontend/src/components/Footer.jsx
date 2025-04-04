import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
            <img src={assets.logo} className="mb-5 w-32" alt="logo" />
            <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia vero expedita nesciunt eos molestiae esse nisi ab nemo odit iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem nam atque. Incidunt voluptatibus, quae consectetur fugiat eaque ratione enim.</p>
        </div>
        <div className="">
           <p className="text-xl font-medium mb-5">Company</p> 
           <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy and Policy</li>
           </ul>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul classNam="flex flex-col gap-1 text-gray-600">
                <li>+1-212-678-5454</li>
                <li>contact@thebappy.info</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-gray-500 text-center">&copy;Copyright 2023thebappy.com -  All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
