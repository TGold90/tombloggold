import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NavBar() {
  return (
    <header className='flex flex-row justify-between p-6 font-bold'>
      <Link to='/' className='text-5xl p-5 ml-20'>
        b__d
      </Link>
      <nav className=''>
        <ul className='flex flex-row text-lg p-5'>
          <Link to='/' className='px-5'>
            Home
          </Link>
          <Link to='/about' className='px-5'>
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
}
