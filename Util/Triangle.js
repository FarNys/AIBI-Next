import React from "react";
import "./Util.scss";

const Triangle = ({ classTitle = "triangle_right" }) => {
  return (
    <div className={`triangle_container ${classTitle}`}>
      <div className="triangle_big"></div>
      <div className="triangle_small"></div>
    </div>
  );
};

export default Triangle;
