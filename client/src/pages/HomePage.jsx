import React, { useState, useEffect, useContext } from "react";
import Article from "../components/Article";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import MainTitle from "../components/HomeTitle";
import SelectPost from "../components/SelectPost";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("Main");

  return (
    <>
      <main className='grid grid-cols-4 gap-10'>
        {currentPage === "Main" ? (
          <>
            <HomeTitle /> <HomeContent />
          </>
        ) : (
          <Article />
        )}
        <Aside />
        <section className='col-span-4 grid grid-cols-4 justify-center items-center mx-20'>
          <SelectPost />
        </section>
      </main>
      <Footer />
    </>
  );
}
