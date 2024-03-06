import React from 'react'
import bootstrap from '../assets/portfolio/bootstrap.png'
import ecommerce from '../assets/portfolio/ecommerce.jpg'
import MVC from '../assets/portfolio/MVC.jpeg'
import Notes from '../assets/portfolio/Notes.png'
import razor from '../assets/portfolio/razor.jpg'
import THEME from '../assets/portfolio/THEME.jpg'
import video from '../assets/portfolio/video.jpg'
import videocalling from '../assets/portfolio/videocalling.jpg'

const Portfolio = () => {
    const Portfolio = [
        {
            id:1,
            src: bootstrap,
            demo: "",
            code: "https://github.com/pranjal123-jaiswal/Dynamic-Website"
        },
        {
            id:2,
            src: ecommerce,
            demo: "https://react-e-commerce-website-seven.vercel.app/",
            code: "https://github.com/pranjal123-jaiswal/React_E_commerce_website"
        },
        {
            id:3,
            src: MVC,
            demo: "",
            code: "https://github.com/pranjal123-jaiswal/node-MVC-starter"
        },
        {
            id:4,
            src: Notes,
            demo: "https://vercel.com/pranjal123-jaiswal/notes-crud-frontend",
            code: "https://github.com/pranjal123-jaiswal/Notes-CRUD--Frontend"
        },
        {
            id:5,
            src: razor,
            demo: "",
            code: "https://github.com/pranjal123-jaiswal/RAZORPAY-FRONTEND"
        },
        {
            id:6,
            src: THEME,
            demo: "https://curd-operation-theme-changer.vercel.app/",
            code: "https://github.com/pranjal123-jaiswal/CURD-OPERATION_Theme_Changer"
        },
        {
            id:7,
            src: video,
            demo: "",
            code: "https://github.com/pranjal123-jaiswal/Video_Streaming_Frontend"
        },
        {
            id:8,
            src: videocalling,
            demo: "",
            code: "https://github.com/pranjal123-jaiswal/Video_Chat_Application"
        }
    ]

 const handleClick = (link) => {
        if (link) {
          window.open(link, '_blank');
        }
      };
    
const sortedPortfolio = Portfolio.sort((a, b) => {
        if (a.demo && !b.demo) return -1;
        if (!a.demo && b.demo) return 1;
        return 0;
      });

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-auto text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Portfolio</p>
                <p className='py-6'>Check out some of work right here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
  sortedPortfolio.map(({ id, src, demo, code }) => (
    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
      <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
      <div className='flex items-center justify-center'>
        {demo ? (
          <>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(demo)}>Demo</button>
            <button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(code)}>Code</button>
          </>
        ) : (
          <button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(code)}>Code</button>
        )}
      </div>
    </div>
  ))
}

            </div>

            

        </div>
    </div>
  )
}

export default Portfolio