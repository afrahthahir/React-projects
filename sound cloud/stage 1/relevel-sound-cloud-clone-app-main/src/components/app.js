import React from "react";
import "../styles/app.css";
import Loader from "./loader";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <header>Relevel Sound Cloud</header>
      <Loader />
      <Footer />
    </div>
  );
}

export default App;
