import './App.scss';
import React, {useState, useEffect} from "react";
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Skills from './components/skills/Skills';
import Admin from './components/admin/Admin';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  return (
    <main>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>{/**/}
      {/*<Admin/>*/}
    </main>

  )
}

export default App
