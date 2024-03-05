import React from 'react'
import css from "../assets/css.png"
import github from "../assets/github.png"
// import graphql from "../assets/graphql.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import websocket from "../assets/websocket.png"
import sql from "../assets/sql.png"
import mongodb from "../assets/mongodb-logo.png"
import Firebase from "../assets/Firebase.png"
import express from "../assets/express-js.png"
import Bootstrap  from "../assets/Bootstrap.png"

const Experience = () => {
    const Experience = [
        {
            id:1,
            src: css,
            title: "CSS",
            style: "shadow-cyan-500"

        },
        {
            id:2,
            src: github,
            title: "GitHub",
            style: "shadow-gray-500"
        },
        {
            id:3,
            src: websocket,
            title: "Websocket",
            style: "shadow-gray-500"
        },
        {
            id:4,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:5,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:6,
            src: node,
            title: "Node js",
            style: "shadow-green-500"
        },
        {
            id:7,
            src: reactImage,
            title: "React js",
            style: "shadow-blue-500"
        },
        {
            id:8,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-purple-500"
        },
        {
            id:9,
            src: sql,
            title: "SQL",
            style: "shadow-cyan-500"
        },
        {
            id:10,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-500"
        },
        {
            id:11,
            src: Firebase,
            title: "FireBase",
            style: "shadow-orange-500"
        },
        {
            id:12,
            src: express,
            title: "Express",
            style: "shadow-gray-500"
        },
        {
            id:13,
            src: Bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500"
        },
        
    ]
  return (
    <div name="Experience" className='bg-gradient-to-b from-black to-gray-800 w-full h-auto'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6'>Theses are theTechnologies  worked on</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                    Experience.map(({id , src , style , title}) => (
                        <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style }>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                
                    ))
                }
                </div>

        </div>
    </div>
  )
}

export default Experience