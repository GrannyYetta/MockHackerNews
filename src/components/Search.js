import React, { useState } from "react";

const Search = (props) => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    props.setQuery(inputText);
    props.setPaginate(5);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { 
        e.preventDefault();
        props.setQuery(inputText);
        props.setPaginate(5);
    }
  }

  return (
    <div>
      <form className="search-bar" onSubmit={submit}>
        <input
          type="text"
          className="input-field"
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
          placeholder="Search Hacker News"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
