import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { HomePageContext, HomePageUpdateContext, HomePageProvider } from "./utils/HomePageContext";

function App() {
  return (
    <Router>
      <HomePageProvider> 
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </HomePageProvider>
    </Router>
  );
}

export default App;
