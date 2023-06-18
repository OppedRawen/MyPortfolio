
import React from 'react';

import './App.css';

import Skills from './skills';
import Footer from "./footer";
import {Contact,Navbar,Experience,Projects,About,Introduction} from './components';

function App() {

  return (
    <div className=" bg-[#1d1d20] px-10">
      <header className=" min-h-screen">
        <Navbar />

        <About />
        
      </header>
      <Introduction />
      <Skills />

     <Experience />

      
      <Projects />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
