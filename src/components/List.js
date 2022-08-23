import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.js";
import axios from "axios";
const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        setData(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => console.log(err));
    //const [info ,setInfo]= useState(response.data);
  }, []);
  return (
    <ol className="list">
      <ListItem data={data} key={0} />
    </ol>
  );
};

export default List;
