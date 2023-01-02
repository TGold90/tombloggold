import React, { useState, useEffect, useContext } from "react";
import tomguitar from "../images/tomguitar.jpeg";
import Github from "../images/GitHub-64px.png";
import LinkedIn from "../images/linkedin.png";

export default function Aside(props) {
  return (
    <aside className='flex flex-col col-span-1 mr-10 rounded-lg items-center justify-center text-center'>
      <div className='rounded justify-center items-center text-center px-10 text-sm'>
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
