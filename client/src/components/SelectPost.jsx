import React, { useState, useEffect, useContext } from "react";
// import { dispContext } from "../pages/HomePage";
import Posts from "./posts.json";
import HomePage from "../pages/HomePage";

export default function SelectPost({ currentDisp, handleDispChange }) {
  // const state = currentDisp;
  const setDisplay = id => {
    handleDispChange(id ? id : null);
    // console.log(currentDisp);
  };

  return (
    Posts &&
    Posts.map(post => {
      return (
        <button
          key={post.id}
          onClick={() => setDisplay(post.id)}
          className='col-span-2 justify-center items-center'
        >
          <div className='object-center p-5'>
            <h2>{post.title}</h2>
            <img src={post.img} className='object-center'></img>
          </div>
        </button>
      );
    })
  );
}
