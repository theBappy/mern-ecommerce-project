import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-400">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="about_img" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet commodi repellendus repellat velit, inventore, aperiam error tenetur est rem accusantium aliquid vel facilis excepturi libero quo, consectetur sed officia. Facilis tenetur, dignissimos unde quidem fugit vitae modi culpa maxime cumque dolor incidunt rem, eos dolores nesciunt ea in impedit a. Asperiores aspernatur illo omnis et neque perferendis reprehenderit sit natus.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem tempora necessitatibus et quo, rem minima quos excepturi eum accusantium animi accusamus eius dolorum consectetur reprehenderit aut cupiditate magnam blanditiis odio rerum facilis tenetur ipsam? Delectus dolor dolores quas sapiente. Ratione laborum tenetur sit a qui explicabo consequatur vel numquam corporis!</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam reiciendis explicabo natus incidunt. Nemo natus laborum optio, fuga commodi cupiditate omnis temporibus vel recusandae officia ducimus eos consectetur laboriosam! Velit.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={'CHOOSE US?'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error dolorem cumque perspiciatis omnis est, reiciendis veniam architecto minima repellat.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error dolorem cumque perspiciatis omnis est, reiciendis veniam architecto minima repellat.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo error dolorem cumque perspiciatis omnis est, reiciendis veniam architecto minima repellat.</p>
        </div>

      </div>
      <NewsLetter />
    </div>
  )
}

export default About