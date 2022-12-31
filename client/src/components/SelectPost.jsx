import React, { useState, useEffect, useContext } from "react";
import Posts from "./posts.json";

export default function SelectPost() {
  return (
    Posts &&
    Posts.map((post) => {
      return (
        <div key={post.id} className='col-span-2 object-center p-5'>
          <h2>{post.title}</h2>
          <img src={post.img} className='object-center'></img>
        </div>
      );
    })
  );
}
