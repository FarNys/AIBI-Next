import React from "react";
// import "../Styles/SquareSvg.scss";
const SquareSvg = ({ fillColorDark, fillColorLight, posLeft = false }) => {
  return (
    <div className="svg_square_box">
      <div
        className={
          posLeft
            ? "square_container square_left"
            : "square_container square_right"
        }
      >
        <div></div>
        <div style={{ backgroundColor: fillColorDark }}></div>
        <div style={{ backgroundColor: fillColorLight }}></div>
        <div></div>
        <div style={{ backgroundColor: fillColorLight }}></div>
        <div></div>
        <div style={{ backgroundColor: fillColorLight }}></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SquareSvg;
