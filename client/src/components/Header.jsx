import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className='flex flex-row space-between p-2'>
      <span>tg</span>
      <NavBar />
    </header>
  );
}
