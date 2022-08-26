import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
import Search from "./Search";

const List = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setData(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => console.log(err));

    //const [info ,setInfo]= useState(response.data);
  }, [query]);
  console.log(data);
  return (
    <>
      <div className="Search">
        <Search setQuery={setQuery} />
      </div>
      <ol className="list">
        {data.map((newsItem) => {
          return <ListItem data={newsItem} key={newsItem.url} />;
        })}
      </ol>
    </>
  );
};

export default List;
