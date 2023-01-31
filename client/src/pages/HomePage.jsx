import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import MainTitle from "../components/HomeTitle";
import NavBar from "../components/NavBar";
import SelectPost from "../components/SelectPost";
import { getOneArticle } from "../utils/API";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

export default function HomePage() {
  const [currentDisp, setCurrentDisp] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const theme = darkTheme ? "dark" : "light";

  useEffect(() => {
    if (currentDisp) {
      const fetchArticle = async () => {
        try {
          const res = await getOneArticle(currentDisp);
          const article = await res.json();
          setSelectedArticle(article);
        } catch (err) {
          console.error(err);
        }
      };
      fetchArticle();
    }
  }, [currentDisp]);

  const renderDisp = () => {
    if (currentDisp === null) {
      return (

        <HomeContent />

      );
    }
    //
    if (currentDisp && selectedArticle) {
      return <Article article={selectedArticle} />;
    }
  };

  const handleDispChange = newDisp => setCurrentDisp(newDisp);

  return (
    <>
      <NavBar />
      <main className={darkTheme ? "dark grid grid-cols-4 gap-10" : "light grid grid-cols-4 gap-10"}>
        {renderDisp()}
        <Aside
          currentDisp={currentDisp}
          handleDispChange={handleDispChange}
        />
        <SelectPost
          currentDisp={currentDisp}
          handleDispChange={handleDispChange}
        />
      </main>
      <Footer />
    </>
  );
}
