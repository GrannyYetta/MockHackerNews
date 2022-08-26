import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import Search from "./Search";

const List = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [paginate, setPaginate] = useState(5);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setData(response.data.hits);
      })
      .catch((err) => alert(err));
  }, [query]);

  const loadMore = () => {
    setPaginate((prevValue) => prevValue + 5);
  };
  return (
    <>
      <div className="Search">
        <Search setQuery={setQuery} setPaginate={setPaginate} />
      </div>
      <div className="contentBox">
        <ol className="list">
          {data.slice(0, paginate).map((newsItem) => {
            if (
              newsItem.title &&
              newsItem.title !== "" &&
              newsItem.url &&
              newsItem.url !== ""
            )
              return <ListItem dataItem={newsItem} />;
          })}
        </ol>
        <div className="buttonBox">
          <button
            className="glow-on-hover"
            style={{ display: paginate >= data.length ? "none" : "block" }}
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
