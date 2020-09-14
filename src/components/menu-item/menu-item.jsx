import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem  = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div style={{ backgroundImage: `url(${imageUrl})` }}  className="background-image"></div>
      <div className="content">
        <span className="title">{title}</span>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
