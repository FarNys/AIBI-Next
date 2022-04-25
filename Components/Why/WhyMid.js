import React from "react";
import DotBox from "../../Util/DotBox";
import SquareSvg from "../../Util/SquareSvg";
import ButtonEffect from "../../Util/ButtonEffect";
import image_1 from "../../assets/images/image_1.jpg";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const WhyMid = () => {
  return (
    <div className="why_mid_container">
      <div className="why_mid_box">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={true}
        />
        {/* SINGLE CARD WITH CONTENT+IMAGE */}
        <Slide direction="left" duration={1500}>
          <Fade delay={500}>
            <div className="why_box_card">
              <div className="why_box_content ">
                <h2>Strapi for Developers</h2>
                <p>
                  Break free from traditional CMS technical debt, easily
                  customize and extend your project with your favorite tech
                  stack and tools.
                </p>
                <div className="global_btn_container">
                  {" "}
                  <ul>
                    <ButtonEffect classTitle="btn_getstarted" />
                    <ButtonEffect classTitle="btn_trydemo" text="Get Started" />
                  </ul>
                </div>
              </div>
              <div className="why_box_img">
                <div className="top_dot_container">
                  {" "}
                  <DotBox />
                </div>
                <div className="why_mid_image_container">
                  <img src={image_1} alt="why_mid_page_image" />
                </div>
                <div className="bot_dot_container">
                  <DotBox />
                </div>
              </div>
            </div>
          </Fade>
        </Slide>
        {/* SINGLE CARD END HERE */}
        <Slide direction="left" duration={1500}>
          <Fade delay={500}>
            <div className="why_box_card">
              <div className="why_box_content ">
                <h2>Content Managers</h2>
                <p>
                  Enjoy the freedom to intuitively manage content through a
                  user-friendly interface.
                </p>
                <div className="global_btn_container">
                  {" "}
                  <ul>
                    <ButtonEffect classTitle="btn_green" />
                  </ul>
                </div>
              </div>
              <div className="why_box_img">
                <div className="top_dot_container top_dot_container_s">
                  <DotBox />
                </div>
                <div className="why_mid_image_container">
                  <img src={image_1} alt="why_mid_page_image" />
                </div>
                <div className="bot_dot_container top_dot_container_s">
                  <DotBox />
                </div>
              </div>
            </div>
          </Fade>
        </Slide>
        {/* SINGLE CARD END HERE */}
        <SquareSvg
          fillColorDark="#323232"
          fillColorLight="#32323277"
          posLeft={false}
        />
      </div>

      {/* <DotBox /> */}
    </div>
  );
};

export default WhyMid;
