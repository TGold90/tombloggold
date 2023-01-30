import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import tomguitar from "../images/tomguitar.jpeg";
import Github from "../images/GitHub-white.png";
import GithubBlack from "../images/GitHub-black.png"
import LinkedIn from "../images/linkedin.png";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

export default function Aside(props) {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const theme = darkTheme ? "dark" : "light";

  return (
    <aside className={darkTheme ? "dark mr-10 items-center justify-center text-center border-l-2 " : "light mr-10 items-center justify-center text-center border-l-2 "}>
      <div className='rounded px-10 text-sm relative top-10'>
        <nav className='header-font'>
          <ul className='flex flex-row text-lg p-5 mr-20'>
            <Link to='/' className='px-2'>
              Home
            </Link>
            <Link to='/about' className='px-2'>
              About
            </Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </ul>
        </nav>
        <img src={tomguitar} className='rounded-t-full border'></img>
        <p className='text-lg p-1'>
          Tom <span>Gold</span>
        </p>
        <p>Web Developer</p>
        <div id='socialLinks' className='flex flew-row justify-center mt-1'>
          <a href='https://github.com/TGold90' target='_blank' className='px-2'>
            <img className='h-7' src={Github} />
          </a>
          <a
            href='https://www.linkedin.com/in/tom-gold-72256a177/'
            target='_blank'
            className='px-2'
          >
            <img className='h-7' src={LinkedIn} />
          </a>
        </div>
      </div>
    </aside>
  );
}
