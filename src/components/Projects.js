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
    exp: 'Business management app', 
    text: 'The system includes: registering a new business, managing an appointment diary And customer management, viewing reports and summaries of information, a notification system for the business owner through Flutter, Customer SMS System (Queue Reminder, Change Alerts).',
    tools: ['Node.Js', 'Express', 'MongoDB', 'Ejs', 'JS', 'CSS'],
    link: {
      github: null,
      website: 'https://www.bookeet.co.il/'
    },
    image: '/bookeet.png'
  },
  {
    name: 'Twitter clone',
    exp: 'Created for learning purposes', 
    text: 'Customer registration via Google account, publishing posts with photos, likes system, comments system.',
    tools: ['ReactJS', 'next.js', 'recoil', 'fireBase', 'Tailwind CSS'],
    link: {
      github: 'https://github.com/eliranr/twitter',
      website: 'https://twitter.eliran.tech/'
    },
    image: '/twitter.png'
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
    name: 'Giraffe',
    exp: 'Monitoring construction plans', 
    text: '',
    tools: ['Node.Js', 'Express', 'MongoDB', 'Ejs', 'JS'],
    link: {
      github: 'https://github.com/eliranr/giraf',
      website: 'https://giraffe1.herokuapp.com'
    },
    image: '/giraf.png'
  },
]