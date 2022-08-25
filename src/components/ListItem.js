import React from "react";
import moment from 'moment';

const ListItem = (props) => {
  const mainUrl = (url) => {
    if (url){
      return url.split("/")[2];
    }
  }

  return (
    <div>
         <div className="item">
            <span className="title">{props.data.title}</span>
            <span className="url"><a href={props.data.url}>({mainUrl(props.data.url)})</a></span>
            <p className="subtitle">{props.data.points} points by {props.data.author} {moment(props.data.created_at).fromNow()} | {props.data.num_comments} comments</p>
         </div>
   </div>
  );
}

export default ListItem;
