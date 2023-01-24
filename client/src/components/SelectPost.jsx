import React, { useState, useEffect, useContext } from "react";
// import { dispContext } from "../pages/HomePage";
import Posts from "./posts.json";
import HomePage from "../pages/HomePage";
import { getAllArticles, getOneArticle } from "../utils/API";

export default function SelectPost({ currentDisp, handleDispChange }) {
  // const state = currentDisp;
  const setDisplay = id => {
    handleDispChange(id ? id : null);
    // console.log(currentDisp);
  };

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const res = await getAllArticles();
        if (!res.ok) {
          throw new Error("Cannot find list of articles");
        }
        const articleList = await res.json();
        setArticleList(articleList);
      } catch (err) {
        console.error(err);
      }
    };
    getArticleList();
  }, []);



  return (
    articleList &&
    articleList.map(article => {
      return (
        <button
          key={article._id}
          onClick={() => setDisplay(article._id)}
          className='col-span-2 justify-center items-center border'
        >
          <div className='object-center p-5'>
            <h2>{article.title}</h2>
            <img src={article.img} className='object-center'></img>
          </div>
        </button>
      );
    })
  );
}
