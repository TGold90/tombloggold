import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

export default function Footer() {
  return (
    <footer className='flex flex-row space-between p-10 text-sm border'>
      <p>Copyright Tom Gold 2023</p>
    </footer>
  );
}
