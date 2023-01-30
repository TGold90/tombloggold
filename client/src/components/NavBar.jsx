import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

export default function NavBar() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const theme = darkTheme ? "dark" : "light";

  return (
    <header className={darkTheme ? "dark flex flex-row justify-center p-2 font-bold header-font" : "light flex flex-row justify-center p-2 font-bold header-font"}>
      <Link to='/' className='text-5xl p-2 ml-20'>
        tg-blog
      </Link>
      {/* <nav className=''>
        <ul className='flex flex-row text-lg p-5 mr-20'>
          <Link to='/' className='px-2'>
            Home
          </Link>
          <Link to='/about' className='px-2'>
            About
          </Link>
        </ul>
      </nav> */}
    </header >
  );
}
