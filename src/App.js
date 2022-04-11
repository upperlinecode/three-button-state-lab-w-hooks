import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";

const App = () => {
  let user = "Wanda";
  const handleButton1 = () => {};
  const handleButton2 = () => {};

  return (
    <div className="App">
      <Nav />
      <div className="StateCard">
        <h1>Welcome USER</h1>
        <div className="card-content">
          <div className="item">
            <button onClick={handleButton1}>xx</button>
          </div>
          <div className="item">
            <button onClick={handleButton2}>xx</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
