import React, { useState, useEffect, useContext } from "react";
import tomguitar from "../images/tomguitar.jpeg";

export default function Aside(props) {
  return (
    <aside className='flex flex-col col-span-1 mr-10 rounded-lg items-center justify-center text-center'>
      <div className='rounded justify-center items-center text-center p-10'>
        <img src={tomguitar} className='rounded-t-full border'></img>
        <p className='text-sm py-3'>
          Tom <span>Gold</span>
        </p>
        <p>Web Developer, Recovered Addict</p>
      </div>
    </aside>
  );
}
