import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import MainTitle from "../components/HomeTitle";
import SelectPost from "../components/SelectPost";
import { getOneArticle } from "../utils/API";

export default function HomePage() {
  const [currentDisp, setCurrentDisp] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if(currentDisp){
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
        <>
          <HomeTitle /> <HomeContent />
        </>
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
      <main className='grid grid-cols-4 gap-10'>
        {renderDisp()}
        <Aside />
        <section className='col-span-4 grid grid-cols-4 justify-center items-center mx-20 mb-10'>
          <SelectPost
            currentDisp={currentDisp}
            handleDispChange={handleDispChange}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
