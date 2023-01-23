import React, { createContext, useState } from 'react'
import Article from '../components/Article';


export const HomePageContext = createContext();
export const HomePageUpdateContext = createContext();

export const HomePageProvider = ({ children }) => {

    const [currentDisp, setCurrentDisp] = useState(null);


  // const renderDisp = () => {
  //   console.log(currentDisp);
  //   if (currentDisp === null) {
  //     return (
  //       <>
  //         <HomeTitle /> <HomeContent />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <Article />
  //     )
  //   }
  // };

  const handleDispChange = newDisp => setCurrentDisp(newDisp);

  return (
    <HomePageContext.Provider value={currentDisp}>
      <HomePageUpdateContext.Provider value ={handleDispChange}>
        {children}
      </HomePageUpdateContext.Provider>
    </HomePageContext.Provider>
  )
}

