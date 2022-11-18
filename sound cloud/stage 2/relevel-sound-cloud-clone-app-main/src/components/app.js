import React from "react";
import "../styles/app.css";
import Loader from "./loader";
import Footer from "./footer";
import Cardlist from "./cardlist";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      <header>Relevel Sound Cloud</header>
      {loading ? <Loader /> : <Cardlist />}

      <Footer />
    </div>
  );
}

export default App;
