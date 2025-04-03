
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { submittedData } = useContext(DataContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((result) => {
        setApiData(result.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6  min-h-screen">


        <h1 className="text-center text-9xl text-red-700">Home Page</h1>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">API Fetch Data</h1>

      {loading ? (
        <h1 className="dark:text-white">Loading....</h1>
      ) : (
        <div className="flex flex-wrap gap-6">
          {apiData.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 w-64">
              <h2 className="text-lg font-bold dark:text-white">{product.title}</h2>
              <p className="dark:text-gray-300"><span className="font-semibold">Description:</span> {product.description}</p>
              <p className="dark:text-gray-300"><span className="font-semibold">Price:</span> ${product.price}</p>
            </div>
          ))}

          {submittedData.map((data, index) => (
            <div key={`user-${index}`} className="p-4 border rounded-lg shadow-lg bg-blue-100 dark:bg-gray-800 w-64">
              <h2 className="text-lg font-bold dark:text-white">{data.name}</h2>
              <p className="dark:text-gray-300"><span>Email:</span> {data.email}</p>
              <p className="dark:text-gray-300"><span>Contact:</span> {data.contact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

