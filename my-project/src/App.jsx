

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import { DataProvider } from "./components/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;


