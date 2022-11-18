import React from "react";
import "../styles/app.css";
import Header from "./Header";
import Loader from "./loader";
import Footer from "./footer";
import Cardlist from "./cardlist";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setsearchTerm] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      <Header search={setsearchTerm} />
      {loading ? <Loader /> : <Cardlist term={searchTerm} />}
      <Footer />
    </div>
  );
}

export default App;
