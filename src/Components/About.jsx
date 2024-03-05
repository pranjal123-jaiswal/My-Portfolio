import React from 'react'

const About = () => {
  return (
    <div name ="About" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 inline border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
Certainly! Here's some content for the About section of your portfolio website:

Welcome to my portfolio! 🚀

I'm a dedicated MERN (MongoDB, Express.js, React.js, Node.js) developer with a passion for building innovative and scalable web applications. With a solid background in computer science and years of experience in software development, I bring a blend of technical expertise and creative problem-solving to every project.</p>
            <br/>
            <p className='text-xl'>
            My journey in web development began with a fascination for crafting dynamic and engaging user experiences. Over the years, I've honed my skills in frontend and backend technologies, mastering frameworks like React.js and Express.js to create seamless and intuitive interfaces.
            </p>
            <br/>
            <p className='text-xl'>
            In addition to my proficiency in the MERN stack, I also have experience with cutting-edge technologies such as Firebase and websockets. Leveraging Firebase's real-time database and authentication services, I've built secure and dynamic applications that scale with ease. Furthermore, my expertise in implementing websockets enables me to create real-time communication channels, enhancing the interactivity and responsiveness of web applications.
            </p>
            <br/>
            {/* <p className='text-xl'>
            I thrive in collaborative environments and enjoy working with cross-functional teams to bring projects to life. Whether it's developing RESTful APIs, optimizing database performance, or deploying applications to the cloud, I'm always eager to take on new challenges and learn from the experience.
            </p> */}
        </div>
    </div>
  )
}

export default About