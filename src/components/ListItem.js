import React from "react";
import moment from "moment";

const ListItem = (props) => {
  const mainUrl = (url) => {
    if (url) {
      return url.split("/")[2];
    }
  };

  return (
    <div>
      <div className="item">
        <span className="title">{props.dataItem.title}</span>
        <span className="url">
          <a href={props.dataItem.url}>({mainUrl(props.dataItem.url)})</a>
        </span>
        <p className="subtitle">
          {props.dataItem.points} points by {props.dataItem.author}{" "}
          {moment(props.dataItem.created_at).fromNow()} |{" "}
          {props.dataItem.num_comments} comments
        </p>
      </div>
    </div>
  );
};

export default ListItem;
