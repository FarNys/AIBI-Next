import React from "react";
const FeatureComponent = ({ title, text }) => {
  return (
    <div className="feature_item_container">
      <div className="feature_item_container">
        {/* <Icon /> */}
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureComponent;
