import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                Linkdein <FaLinkedin size={30} />
                </>

            ),
            href: "https://www.linkedin.com/in/pranjal-jaiswal-7a707920a/",
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>

            ),
            href: "https://github.com/pranjal123-jaiswal",
            // style: 'rounded-tr-md'
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>

            ),
            href: "mailto:pranjaldude2000@gmail.com",
            // style: 'rounded-tr-md'
        },
        {
            id:4,
            child: (
                <>
                Resume <BsFillPersonLinesFill    size={30} />
                </>

            ),
            href: "/PRANJAL JAISWAL Resume Experience.pdf",
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        
        <ul>
        {
        links.map(link => (
            <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bggray bg-gray-500" }>
            <a href = {link.href}
             className='flex justify-between items-center w-full text-white'
            download={link.download}
            target='_blank'
            rel="noreferrer"
            >
                {link.child}
            </a>
        </li>
        ))
    }
           
        </ul>
    </div>
  )
}

export default SocialLinks