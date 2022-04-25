import React from "react";
// import "../Styles/HomeMain.scss";
import FeatureComponent from "../../Util/FeatureComponent";
import StorageIcon from "@mui/icons-material/Storage";
import SquareSvg from "../../Util/SquareSvg";
import CodeIcon from "@mui/icons-material/Code";
// import "../Styles/FeatureComponent.scss";
import {
  Fade,
  Bounce,
  AttentionSeeker,
  Zoom,
  Slide,
} from "react-awesome-reveal";
import TopicCard from "../../Util/TopicCard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CottageIcon from "@mui/icons-material/Cottage";
import CameraIcon from "@mui/icons-material/Camera";
import SliderCards from "./SliderCards";
const HomeMain = () => {
  return (
    <div className="homemain_container">
      {/* <h1>HomeMain</h1> */}

      <div className="homemain_inner">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={false}
        />
        <div className="home_main_header">
          <h5>TOP FEATURES</h5>
          <h1>Build apps fast</h1>
          <p>
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
        <div className="feature_item_container">
          {/* SINGLE FEATURE ITEM */}
          <Fade delay={300} duration={1000}>
            <Slide cascade direction="up">
              <div className="feature_item_box">
                <div className="feature_item_header">
                  <Zoom delay={1000} duration={500}>
                    <CodeIcon />
                  </Zoom>
                  <h3>Code Editor</h3>
                </div>

                <p>
                  Forever. The entire codebase is available on GitHub and
                  maintained by hundreds of contributors.
                </p>
              </div>
            </Slide>
          </Fade>
          {/* SINGLE FEATURE END */}
          {/* SINGLE FEATURE ITEM */}
          <Fade delay={300} duration={1000}>
            <Slide cascade direction="up">
              <div className="feature_item_box">
                <div className="feature_item_header">
                  <Zoom delay={1000} duration={500}>
                    <StorageIcon />
                  </Zoom>
                  <h3>Self-hosted</h3>
                </div>
                <p>
                  Don’t give up on data privacy or lock yourself in. Keep
                  control of your data and your costs at all time.
                </p>
              </div>
            </Slide>
          </Fade>
          {/* SINGLE FEATURE END */}
          {/* SINGLE FEATURE ITEM */}
          <Fade delay={300} duration={1000}>
            <Slide cascade direction="up">
              <div className="feature_item_box">
                <div className="feature_item_header">
                  <Zoom delay={1000} duration={500}>
                    <LocalHospitalIcon />
                  </Zoom>
                  <h3>Emergency</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita unde neque aspernatur ad nemo et omnis distinctio quo
                  quibusdam facere!
                </p>
              </div>
            </Slide>
          </Fade>
          {/* SINGLE FEATURE END */}
          {/* SINGLE FEATURE ITEM */}
          <Fade delay={300} duration={1000}>
            <Slide cascade direction="up">
              <div className="feature_item_box">
                <div className="feature_item_header">
                  <Zoom delay={1000} duration={500}>
                    <CottageIcon />
                  </Zoom>
                  <h3>Cottage</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </Slide>
          </Fade>
          {/* SINGLE FEATURE END */}
          {/* SINGLE FEATURE ITEM */}
          <Fade delay={300} duration={1000}>
            <Slide cascade direction="up">
              <div className="feature_item_box">
                <div className="feature_item_header">
                  <Zoom delay={1000} duration={500}>
                    <CameraIcon />
                  </Zoom>
                  <h3>Camera</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  neque rem expedita inventore quae consequatur?
                </p>
              </div>
            </Slide>
          </Fade>
          {/* SINGLE FEATURE END */}
        </div>
        <SquareSvg
          fillColorDark="#ee1b6c"
          fillColorLight="#ee1b6c77"
          posLeft={true}
        />
      </div>
      <SliderCards />
    </div>
  );
};

export default HomeMain;
