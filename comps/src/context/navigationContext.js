import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // handle back & forward browser button click navigation
  useEffect(() => {
    const handler = () => {
        setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

const navigate = (to)=>{
    window.history.pushState({},'',to);
    setCurrentPath(to);
}

  return (
    <NavigationContext.Provider value={{currentPath, navigate}}>
        {/* <div>
            <button onClick={()=>{navigate('/accordian')}}>Accordian</button>
            <button onClick={()=>{navigate('/dropdown')}}>Dropdown</button>
        </div>
        {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
