import React, { useState } from "react";
import ListItem from "./ListItem";

const Search = (props) => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        props.setQuery(inputText)
    }

    return (
        <div>
            <form className="search-bar" onSubmit={submit}>
                <input type="text" className="input-field" onChange={inputHandler} placeholder="Search Hacker News"/>
                <button type="submit" className="search-btn">Search</button>
            </form>
        </div>
    );
}

export default Search;