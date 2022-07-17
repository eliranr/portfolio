import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

export default function Hello({contact, setContact}) {
  const TextVariants = {
    offscreen: {
      y: '-15px',
      opacity: 0,
    },
    onscreen: {
      y: '0',
      opacity: 1,
      transition:{
        duration: 0.3,
        delay: 0.3
      }
    },
    exit: {
      y: '15px',
      opacity: 0,
      transition:{
        duration: 0.3,
        delay: 0
      }
    }
  };
  const TextVariants2 = {
  };

  const texts = ["NextJs", "Python", "Tailwind", 'ReactJs'];
  const texts2 = ["Full Stack Developer", "Backend Developer", "Web Designer", 'FrontEnd Developer'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === texts.length) {
        setCurrentWord(0); 
        i = 0;
      } else setCurrentWord(i);
      i++;
    }, 2400 );

    return () => clearInterval(interval);
  }, []);


  return (
      <div className='flex items-center justify-center md:space-x-10 h-[calc(100vh-86px)] min-h-[400px] mb-5 relative'>
        <motion.div
          className='hidden md:block'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 50
          }}
        >
          <img className='w-[480px]' src={process.env.PUBLIC_URL + '/images/boy.png'} />
        </motion.div>
        <motion.div
          className='w-full pl-6 sm:pl-10 md:pl-0 md:w-[450px] flex flex-col justify-between h-[100%] max-h-[310px] py-1 '
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 50
          }}
        >
          <div className='text-[35px] font-bold '>
            Hi There!<br/>
            I'm <span className='text-blue-600'>Eliran Rosetsky{contact}</span>
          </div>
          <div className='text-[22px] md:text-[25px] font-bold h-full flex space-x-[4.5px] pt-12 items-start overflow-x-hidden'>
            <span>A</span>
            <div className="text-blue-600">
              {texts2[currentWord]}
            </div>

            {/* <motion.div
            key={currentWord}
              className="text-blue-600"
              initial='offscreen'
              animate="onscreen"
              variants={TextVariants2}
            >
              {texts2[currentWord]}
            </motion.div> */}


            <div className="flex w-6 relative">
              <span>using</span> 
              <AnimatePresence>
                {texts.map((word, index) => (
                  index === currentWord
                  ? (<motion.div
                      className="text-blue-600 relative top-[2px] left-1"
                      initial='offscreen'
                      animate="onscreen"
                      exit="exit"
                      variants={TextVariants}
                      key={index}
                    >
                      {word}    
                    </motion.div>
                    )
                  : null
                ))}
              </AnimatePresence>
            </div>
            

            
          </div>
          <button 
            onClick={() => setContact(!contact)} 
            className='bg-blue-600 rounded-[15px] px-2 py-3 text-white font-bold w-[180px] hover:brightness-90'
          >
            CONTACT ME
          </button>
        </motion.div>

        <div className="md:hidden flex flex-col items-center absolute bottom-[60px] right-0">
          <a className="hoverEffect" href="https://www.linkedin.com/in/eliranr/" target='_blank'>
            <img className='w-6' src={'https://cdn.iconscout.com/icon/free/png-256/linkedin-3660036-3094470.png'} />
          </a>
          <a className="hoverEffect" href="https://github.com/eliranr" target='_blank'>
            <img className='w-6' src={'https://cdn.iconscout.com/icon/free/png-256/github-3660031-3094495.png'} />
          </a>
          <a className="hoverEffect" href="https://eliran.tech/files/Eliran Rosetsky cv.pdf" target='_blank'>
            <img className='w-6 relative' src={'https://cdn.iconscout.com/icon/free/png-256/paper-421-432127.png'} />
          </a>
        </div>

      </div>
  )
}



{/* <AnimatePresence>

{(function (rows, i) {
  while (++i <= texts.length) {

    if (i === currentWord) {
      rows.push(
        <motion.div
          className="text-blue-600 relative top-[2px]"
          initial='offscreen'
          animate="onscreen"
          exit="exit"
          variants={TextVariants}
          key={i}
        >
          {texts[i]}    
        </motion.div>
      )
      i = 5;
    }
  }
  console.log(rows.length);
  return rows[0];
})([], -1)}
</AnimatePresence> */}