import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <section>
      <p>About me blurb n such</p>
      <ul>
        <li>GitHub</li>
        <li>Portfolio</li>
        <li>LinkedIn</li>
      </ul>
    </section>
  );
}
