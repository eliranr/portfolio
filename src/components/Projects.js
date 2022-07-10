import React from 'react'
import Pro from './Pro';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className='text-center mb-10' id='projects'>
        <h2 className='text-[27px] mb-[80px]'>My Projects</h2>
        {items.map((item) => (
          <motion.div 
            key={item.name}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
          >
            <Pro key={item.name} data={item}/>
          </motion.div>
        ))}
    </div>
  )
}

const items = [
  {
    name: 'Bookeet',
    exp: 'Appointment app', 
    text: 'An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.',
    tools: ['Node.Js', 'Express', 'MongoDB', 'Ejs', 'JS', 'CSS'],
    link: {
      github: '',
      website: 'a'
    }
  },
  {
    name: 'Twitter clone',
    exp: 'Created for learning purposes', 
    text: 'An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.',
    tools: ['ReactJS', 'next.js', 'recoil', 'fireBase', 'Tailwind CSS'],
    link: {
      github: '',
    }
  },
  {
    name: 'Poker God',
    exp: 'Automation for poker player', 
    text: 'An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.',
    tools: ['Python'],
    link: {
      github: '',
    }
  },
  {
    name: 'Giraf',
    exp: 'Monitoring construction plans', 
    text: 'An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.',
    tools: ['Node.Js', 'Express', 'MongoDB', 'Ejs', 'JS'],
    link: {
      tools: ['Node.Js', 'Express', 'MongoDB', 'Ejs', 'JS', 'CSS'],
    }
  },
]