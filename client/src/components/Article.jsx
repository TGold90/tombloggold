import React, { useState, useEffect, useContext } from "react";
import Posts from "./posts.json";

export default function Article() {
  return (
    <div className='col-span-3 pl-10 my-8 ml-10'>
      <p>{Posts.body}</p>
    </div>
  );
}
