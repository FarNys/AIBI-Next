import React from "react";

const ButtonEffect = ({ text = "Add A Name", classTitle }) => {
  return (
    <li>
      <button className={`btn_getstarted ${classTitle}`}>
        {text} <span></span>
      </button>
    </li>
  );
};

export default ButtonEffect;
