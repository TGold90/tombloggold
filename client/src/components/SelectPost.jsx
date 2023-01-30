import React, { useState, useEffect, useContext } from "react";
// import { dispContext } from "../pages/HomePage";
import Posts from "./posts.json";
import HomePage from "../pages/HomePage";
import { getAllArticles, getOneArticle } from "../utils/API";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

export default function SelectPost({ currentDisp, handleDispChange }) {
  // const state = currentDisp;
  const setDisplay = id => {
    handleDispChange(id ? id : null);
    // console.log(currentDisp);
  };

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const theme = darkTheme ? "dark" : "light";

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
    <section className={darkTheme ? "dark col-span-4 grid grid-cols-4 justify-center items-center mx-20 my-10 gap-5 h-72" : "light col-span-4 grid grid-cols-4 justify-center items-center mx-20 my-10 gap-5 h-72"}>
      {articleList &&
        articleList.map(article => {
          return (
            <button
              key={article._id}
              onClick={() => setDisplay(article._id)}
              className='col-span-2 justify-center items-center border h-36'
            >
              <div className='object-center p-5'>
                <h2 className="header-font">{article.title}</h2>
                <img src={article.img} className='object-center'></img>
              </div>
            </button>
          );
        })}
    </section>
  );
}
