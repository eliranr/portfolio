import React from 'react'
import Box from './Box'
import { motion } from "framer-motion";

export default function Skills() {
    

    
  return (
    <div className='text-center mb-[100px]' id='skills'>
        <h2 className='text-[27px]'>My Skills and Tools</h2>
        <div className='flex flex-wrap justify-center mt-10'>
            {listSkills.map((item) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    <Box name={item.name} text={item.text} link={item.link} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}

const listSkills = [
    {
        name: 'JavaScript',
        text: 'JavaScript concepts, functions, page manipulation, ajax and more.',
        link: 'js'
    },
    {
        name: 'ReactJS',
        text: 'React concepts, functional and class components, Hooks, logic, virtual DOM, rendering and more.',
        link: 'react'
    },
    {
        name: 'Next.Js',
        text: 'Next.js concepts, Link, Dynamic routing, Next.js functions, SSR, GSP, GSR, Router and more.',
        link: 'next'
    },
    {
        name: 'recoil',
        text: 'recoil concepts, managing React & Next.js apps state.',
        link: 'recoil'
    },
    {
        name: 'Node.js',
        text: 'Node.js concepts, events, callbacks, modules, promises and more.',
        link: 'node'
    },
    {
        name: 'Express',
        text: 'Express concepts, functions, router, parsing, middleware and more.',
        link: 'ex'
    },
    {
        name: 'Python',
        text: `Python concepts, selenium, working with API's, scripts, bots, automations and more.`,
        link: 'python'
    },
    {
        name: 'CSS',
        text: 'CSS concepts, flexbox, grid, media queries and more.',
        link: 'css'
    },
    {
        name: 'Tailwind CSS',
        text: 'Tailwind CSS concepts, plugins, global classes, tailwind config file, forms, responsive sites and more.',
        link: 'tail'
    },
    {
        name: 'HTML',
        text: 'HTML concepts, DOM, elements, tags, inputs, forms and much more.',
        link: 'html'
    },
    {
        name: 'MongoDB',
        text: 'MongoDB concepts, documents, collections and more.',
        link: 'mongo'
    },
    {
        name: 'Firebase',
        text: 'Firebase concepts, CRUD operations (Firestore), Firebase Authentication, storage and more.',
        link: 'fire'
    },
    {
        name: 'Git',
        text: 'Git concepts, working with github, basic functions.',
        link: 'git'
    },
    
]