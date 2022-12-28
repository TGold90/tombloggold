import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to='/' className=''>
          Home
        </Link>
        <Link to='/about' className=''>
          About
        </Link>
      </ul>
    </nav>
  );
}
