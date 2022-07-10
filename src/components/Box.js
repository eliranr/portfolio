import React from 'react'
import {useState} from 'react';
import { motion } from "framer-motion";

export default function Box({name, text, link}) {
    const [click, setClick] = useState(false);
    const [card, setCard] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const boten = async () => {
        await delay(0);
        setCard(!card);
    }



    const variants = {
        open: { opacity: 1, rotateY: [90, 0] },
        closed: { opacity: 1,  rotateY: [90, 0] },
    }
    return (
        <motion.div 
            onClick={() => {setClick(!click); boten()}} 
            className='px-2 m-3 w-[150px] h-[150px] md:w-[180px] md:h-[180px] hover:bg-gray-200 cursor-pointer bg-gray-100 md:m-5 rounded-xl flex flex-col justify-center items-center'
            animate={!click ? 'open' : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            {card ? <span className='text-md text-gray-700 mt-[2px] rotateY-[20px]'>{text}</span> 
            : <>
                <img className='w-[110px]' src={`${process.env.PUBLIC_URL}/symbols/${link}.png`} />
                <span className='text-lg text-gray-700 mt-[2px]'>{name}</span>
            </>}
        </motion.div>
    )
}

