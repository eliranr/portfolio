
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import useWindowDimensions from '../hooks/useWindowDimensions';



export default function Menu({menu, setMenu, setMove, setContact, move}) {
    const { height, width } = useWindowDimensions();
    
    const allList = [[0, 93, 186], [0, 85, 170]]
    const [finalList, setFinalList] = useState(0);

    useEffect(() => {
      if (width < 768) {
        setFinalList(1);
      } else {
        setFinalList(0);
      }
    }, [width])
    
  return (
    <>
    <div className="flex justify-center sticky top-0 bg-white z-[1]">
      <div className="flex justify-end md:justify-center w-[95%] sm:w-[90%] ">
        <div className={`w-[255px] md:w-[279px] h-10 flex`}>
          <motion.div
            animate={{
              x: allList[finalList][menu]
            }}
            transition={{ duration: 1 }}
          >
            <div className={`border-t-[5px] border-blue-800 w-[85px] md:w-[calc(279px/3)]`}></div>
          </motion.div>
        </div>
      </div>
    </div>
    <div className="bg-white sticky top-1 py-2 z-[2] justify-start"> {/*תחליט*/}
      <div className="flex w-[95%] sm:w-[90%] h-11 mx-auto justify-between items-center mt-[2px]">
        <div className="flex w-[50px] sm:w-[184px] xl:w-[224px]">
          <Link to='#top' smooth>
            <div className='hoverEffect px-2 py-3' onClick={() => {setMove(true); setMenu(0); setContact(true);}}>
              <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z"/></svg>
            </div>
          </Link>
          {/* <h1 className="text-[25px]">{`</Eliran>`}</h1> */}
        </div>
          <ul className="">
            <Link to='#top' smooth>
              <li onClick={() => {setMove(true); setMenu(0);}}  className="inline-block hoverEffect2">CONTACT</li>
            </Link>
            <Link to='#skills' scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} smooth>
              <li onClick={() => setMenu(1)}  className="inline-block hoverEffect2">SKILLS</li>
            </Link>
            <Link to='#projects' scroll={el => { el.scrollIntoView(true); window.scrollBy(0, -80) }} smooth>
              <li onClick={() => setMenu(2)}  className="inline-block hoverEffect2">PROJECTS</li>
            </Link>
            
          </ul>
          <div className="hidden space-x-5 md:flex xl:space-x-10  items-center">
            <a className="hoverEffect" href="https://www.linkedin.com/in/eliranr/" target='_blank'>
              <img className='w-6' src={'https://cdn.iconscout.com/icon/free/png-256/linkedin-3660036-3094470.png'} />
            </a>
            <a className="hoverEffect" href="https://github.com/eliranr" target='_blank'>
              <img className='w-6' src={'https://cdn.iconscout.com/icon/free/png-256/github-3660031-3094495.png'} />
            </a>
            <a className="hoverEffect">
              <img className='w-6' src={'https://cdn.iconscout.com/icon/free/png-256/paper-421-432127.png'} />
            </a>
            
          </div>
      </div>
    </div>
    </>
  )
}

