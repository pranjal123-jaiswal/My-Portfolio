import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/wbrdvvlb" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input
                    type="text"
                    name="name"
                    placeholder='Enter Your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

<input
                    type="email"
                    name="Email"
                    placeholder='Enter Your Email'
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />

                    <textarea name="message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                    </textarea>
                    <div className='flex justify-center'>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Lets's Talk</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact