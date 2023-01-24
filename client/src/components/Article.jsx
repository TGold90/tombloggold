import React, { useState, useEffect, useContext } from "react";
import Posts from "./posts.json";

export default function Article({article}) {
  return (
    <div className='col-span-3 pl-10 my-8 ml-10 border'>
      <div>
        <h1>{article.title}</h1>
        <img src={article.img} alt={article.title} />
        <p>{article.content}</p>
    </div>
    </div>
  );
}
