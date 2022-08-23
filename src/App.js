import "./App.css";
import React from "react";
import List from "./components/List.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mock Hacker News</h1>
        <div className="Navbar">
          <p>New</p>
          <p>Past</p>
          <p>Comments</p>
          <p>Jobs</p>
          <p>About</p>
        </div>
      </header>
      <div className="List-Container">
        <List />
      </div>
    </div>
  );
}

export default App;
