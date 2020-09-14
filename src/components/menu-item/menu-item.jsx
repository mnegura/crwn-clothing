import React from "react";
import "./menu-item.scss";

export const MenuItem = ({ title, imgUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div style={{ backgroundImage: `url(${imgUrl})` }}  className="background-image"></div>
      <div className="content">
        <span className="title">{title}</span>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};
