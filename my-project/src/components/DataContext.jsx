import { createContext, useState } from "react";
 export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);

  const addData = (data) => {
    setSubmittedData((prev) => [...prev, data]);
  };

  return (
    <DataContext.Provider value={{ submittedData, addData }}>
      {children}
    </DataContext.Provider>
  );
};


