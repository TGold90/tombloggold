import React, { useState, useEffect, useContext } from "react";
import Posts from "./posts.json";

export default function Article({ article }) {
  console.log(article)
  return (
    <div className='col-span-3 pl-10 my-8 ml-20 rounded-md'>
      <div>
        <h1 className="header-font text-2xl p-5">{article.title}</h1>
        {/* <img src={article.img} alt={article.title} /> */}
        <p className="p-10 text-lg">{article.body}</p>
      </div>
    </div>
  );
}
