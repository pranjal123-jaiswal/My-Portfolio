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
            src: bootstrap
        },
        {
            id:2,
            src: ecommerce
        },
        {
            id:3,
            src: MVC
        },
        {
            id:4,
            src: Notes
        },
        {
            id:5,
            src: razor
        },
        {
            id:6,
            src: THEME
        },
        {
            id:7,
            src: video
        },
        {
            id:8,
            src: videocalling
        }
    ]
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-auto text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Portfolio</p>
                <p className='py-6'>Check out some of work right here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                Portfolio.map(({id , src}) => (
                    
                <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            // </div>
                ))
            }
            </div>

            

        </div>
    </div>
  )
}

export default Portfolio