import React from "react";
import './App.css'
import Navbar from "./components/navbar";
import Meme from "./components/meme";
function App() {
  return (
    <div className="app-compo">
      <div id="all">
        <Navbar />
        <Meme />
      </div>
    </div>
  );
}

export default App;
