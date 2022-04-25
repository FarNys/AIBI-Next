import React from "react";
import ButtonEffect from "../../Util/ButtonEffect";

const WhyHeader = () => {
  return (
    <div className="why_top_container">
      <div className="why_top_box">
        <div className="why_header_container">
          <h4>Whi AIBI?</h4>
          <h1>Accelerating the delivery of modern digital experiences.</h1>
          <p>
            Strapi enables content-rich experiences to be created, managed and
            exposed to any digital product, channel or device.
          </p>
        </div>
        <div className="global_btn_container why_header_btn_container">
          <ul>
            <ButtonEffect classTitle="why_btn_color" text="Get Started" />

            <ButtonEffect classTitle="why_btn_color_2" text="AiBi Workflow" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyHeader;
