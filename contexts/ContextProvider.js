import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
  Asia: false,
  Africa: false,
  Europe: false,
  Latin: false,
  Multi: false,
  type:""
};
const initialDate = {
  exactDates: false,
  approximate : false
};
const initialActiveLike = {
  like:false,
  dislike:false,
};
const initialTours = {
  Popular:false,
  Recent:false,
};

export const ContextProvider = ({ children }) => {
  const [activLike , setActiveLike ] = useState(initialActiveLike)
  const [isClicked, setIsClicked] = useState(initialState);
  const [ToursShow, setToursShow] = useState(initialTours);
  const [date, setDate] = useState(initialDate);
  // to whow tour in single blog 
  const handleShowTours = (clicked) =>
  setToursShow({ ...initialTours, [clicked]: true });
  const handleDate = (clicked) =>
  setDate({ ...initialDate, [clicked]: true });
  
  //  to set like 
  const handleClickAvtiveLike = (clicked) =>
  setActiveLike({ ...initialActiveLike, [clicked]: true });

  // set initialState in single tours
  const handleClick = (clicked , type) =>
  setIsClicked({ ...initialState, [clicked]: true , type:clicked } );

  const [displayType, setDisplayType] = useState({
    Nile: "Luxor Aswan Nile Cruises",
    Travel: "Classical Egypt Travel Packages",
  });
  const [desplaygrid, setdesplauGrid] = useState(false);

 

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        handleClick,
        setIsClicked,
        isClicked,
        initialState,
        displayType,
        setDisplayType,
        desplaygrid,
        setdesplauGrid,
        handleClickAvtiveLike,
        activLike,
        handleShowTours,
        ToursShow,
        setToursShow,
        handleDate,
        date,
         setDate
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
