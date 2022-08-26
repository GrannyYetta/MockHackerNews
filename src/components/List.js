import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import Search from "./Search";

const List = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [number, setNumber] = useState(1);
  const postPerPage = 10;
  const pageNumber = [];

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setData(response.data.hits);
        // console.log(response.data.hits);
      })
      .catch((err) => alert(err));

    //const [info ,setInfo]= useState(response.data);
  }, [query]);

  const totalPosts = data.length;
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentNews = data.slice(firstPost, lastPost);

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  }
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className="Search">
        <Search setQuery={setQuery} />
      </div>
      <ol className="list">
        {currentNews.map((newsItem) => {
          return <ListItem data={newsItem} key={newsItem.url}/>;
        })}
        {data &&
          data.map((newsItem) => {
            if (
              newsItem.title &&
              newsItem.title !== "" &&
              newsItem.url &&
              newsItem.url !== ""
            )
              return <ListItem dataItem={newsItem} />;
          })}
      </ol>
      {pageNumber.map((number) => {
        return (
        <div className="pagination-bar">
          <button className="number-button" onClick={() => ChangePage(number)}>{number}</button>
        </div>
        );
      })}
    </>
  );
};

export default List;
