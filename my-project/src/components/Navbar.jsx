
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between bg-gray-200 dark:bg-black p-2 w-full">
      <Link to="/" className="text-black dark:text-white text-2xl">Website</Link>
      <ul className="flex gap-6 text-2xl text-black dark:text-white">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="text-3xl">
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

