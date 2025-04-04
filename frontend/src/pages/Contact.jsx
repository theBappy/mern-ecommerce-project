import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const Contact = () => {
  
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="contact_img" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">576, Williams Station <br /> Saint lucina arena, NY-100, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-8787 <br />Email: admin@thebappy.com</p>
          <p className="font-semibold text-gray-600 text-xl">Careers at Mern@e-commerce</p>
          <p className="text-gray-500">Learn more about teams and job openings</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact