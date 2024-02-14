import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000/";

//step1 creating Context and we have Component
const CitiesContext = createContext();

//step2 making Provider Function

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function FetchCites() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an Error in Loading the Data");
      } finally {
        setIsLoading(false);
      }
    }
    FetchCites();
  }, []);

  //return the Component with Provider and value as prop Composition

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

//creating custom hook so that we don't need to pass the Provider again and again
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Used outside the child Provided");
  return context;
}

export { CitiesProvider, useCities };
