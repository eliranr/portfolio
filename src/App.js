import Hello from './components/Hello';
import Menu from './components/Menu';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [contact, setContact] = useState(true);
  const [menu, setMenu] = useState(0);
  const [move, setMove] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
    if (!move) {
      if (scrollPosition < 420) {
        setMenu(0);
      } else if (scrollPosition < 1280) {
        setMenu(1);
      } else if (scrollPosition > 1280) {
        setMenu(2);
      } 
    } else {
      if (scrollPosition === 0) {
        setMove(false);
      }
    }
  }, [scrollPosition])

  return (
    <BrowserRouter>
      <div className='flex justify-center bg-cover ' > {/*Style={`background-image: url()`}*/}
        <main className="flex flex-col w-[1300px]">
          <Menu setMenu={setMenu} menu={menu} setMove={setMove} move={move} setContact={setContact}/>
          {contact ? 
              <Hello contact={contact} setContact={setContact}/> 
            : <Contact contact={contact} setContact={setContact}/>
          }

          <Skills />
          <Projects />
          
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
