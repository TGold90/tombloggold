import React, { useState, useEffect, useContext, createContext } from "react";
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import MainTitle from "../components/HomeTitle";
import SelectPost from "../components/SelectPost";

export default function HomePage() {
  const [currentDisp, setCurrentDisp] = useState(null);
  // export const dispContext = createContext(currentDisp);

  const renderDisp = () => {
    console.log(currentDisp);
    if (currentDisp === null) {
      return (
        <>
          <HomeTitle /> <HomeContent />
        </>
      );
    }
    if (currentDisp === 1) {
      return <Article />;
    }
    if (currentDisp === 2) {
      return <Article />;
    }
    if (currentDisp === 3) {
      return <Article />;
    }
    if (currentDisp === 4) {
      return <Article />;
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
