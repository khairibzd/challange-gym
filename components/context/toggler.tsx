"use client";

import React, { useContext, useState, useEffect } from "react";
import SmoothScrolling from "../SmoothScrolling";

type TogglerContextType = {
  aboutSidebar: boolean;
    setAboutSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
 
  aboutSidebar: false,
  setAboutSidebar: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [aboutSidebar, setAboutSidebar] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
       aboutSidebar ? "hidden" : "auto";
  }, [ aboutSidebar]);

  return (
    <TogglerContext.Provider
      value={{
        
        aboutSidebar,
        setAboutSidebar,
      }}
    >
   {children}
    </TogglerContext.Provider>
  );
};