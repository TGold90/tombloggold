import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

export default function Footer() {
  return (
    <>
    <div className='nav-anchor h-10'></div>
    <footer className='flex flex-row space-between mt-5 p-2 text-sm fixed bottom-0 h-10 bg-purple text-green w-full'>
      <p>Copyright Tom Gold 2023</p>
    </footer>
    </>
  );
}
