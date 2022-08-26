import "./App.css";
import React from "react";
import Navbar from './components/Navbar';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="List-Container">
        <List />
      </div>
    </div>
  );
}

export default App;
