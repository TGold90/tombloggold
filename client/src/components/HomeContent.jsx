import React, { useState, useEffect, useContext } from "react";
import { useTheme, useThemeUpdate } from "../utils/ThemeContext";

export default function HomeContent() {

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const theme = darkTheme ? "dark" : "light";

  return (
    <section className={darkTheme ? "dark col-span-3 pl-10 my-8 ml-10" : "light col-span-3 pl-10 my-8 ml-10"}>
      <p className=''>
        " This is some text about to mission statement of this blog site.
      </p>
      <br></br>
      <p className='body-font'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <br></br>
      <p>Checkout the latest posts below!</p>
      {/* add down arrow svg/img */}
    </section>
  );
}
