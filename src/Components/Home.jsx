import React from 'react'
import HeroImage from '../assets/Pranjal.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name =" home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>FullStack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>Welcome to my portfolio! I'm an experienced MERN developer proficient in MongoDB, Express.js, React.js, and Node.js, with additional expertise in websockets and Firebase. From building real-time chat applications to integrating Firebase authentication and data storage, I bring a comprehensive skill set to every project. Explore my portfolio to see examples of my work, and let's discuss how we can bring your ideas to life!




</p>
            <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            <Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link>
    <span className='group-hover:rotate-90 duration-300 ' ><IoIosArrowForward size={25} className='ml-1'/></span>
</button>
            </div>
        </div>
        <div>
            <img className='rounded-2xl mx-auto w-2/3 md:w-full' src= {HeroImage} alt=" Img"/>
        </div>


      </div>
    </div>
  )
}

export default Home