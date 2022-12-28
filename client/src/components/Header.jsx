import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <h1>TOMBLOGGOLD</h1>
      <NavBar />
    </header>
  );
}
