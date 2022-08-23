import React from "react";
import axios from "axios";
const ListItem = (props) => {
  // fetch(`http://hn.algolia.com/api/v1/search?query=react`).then((response) =>
  //   response.json()
  // );

  return (
    <li className="list-item">
      <div className="title-container">
        <h3>Title</h3>
        <p>(webpage)</p>
      </div>
      <div className="subtitle-container">
        <p>147 points by asdf 3 hours ago | hide | 10 comments</p>
      </div>
    </li>
  );
};

export default ListItem;
