import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./utils/ThemeContext";


function App() {
  return (
    <Router>
      <ThemeProvider> 
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
