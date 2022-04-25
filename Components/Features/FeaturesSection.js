import React from "react";
import SquareSvg from "../../Util/SquareSvg";
import Triangle from "../../Util/Triangle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";
const FeaturesSection = () => {
  return (
    <div className="features_section_container">
      <div className="features_section_box">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={true}
        />
        <Triangle />

        <div className="features_section_all_cards">
          <h3>Features</h3>
          <h1>Developer centric, API driven</h1>
        </div>
        <div className="features_section_grid">
          {/* SINGLE SECTION CARD START HERE */}
          <div className="features_section_card">
            <div className="features_section_card_icon">
              <Bounce>
                <CheckCircleIcon className="icon" />
              </Bounce>
            </div>
            <Fade>
              <Slide direction="up" duration={500}>
                <div className="features_section_card_content">
                  <h3>Multi-databases support</h3>
                  <p>
                    SQLite, MongoDB, MySQL, Postgres are supported, you just
                    have to pick oneof your choice.
                  </p>
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
          {/* SINGLE SECTION CARD START HERE */}
          <div className="features_section_card">
            <div className="features_section_card_icon">
              <Bounce>
                <CheckCircleIcon className="icon" />
              </Bounce>
            </div>
            <Fade>
              <Slide direction="up" duration={500}>
                <div className="features_section_card_content">
                  <h3>GraphQL or RESTful</h3>
                  <p>
                    Consume the API from any client (React, Vue, Angular),
                    mobile apps or even IoT, using REST or GraphQL.
                  </p>
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
          {/* SINGLE SECTION CARD START HERE */}
          <div className="features_section_card">
            <div className="features_section_card_icon">
              <Bounce>
                <CheckCircleIcon className="icon" />
              </Bounce>
            </div>
            <Fade>
              <Slide direction="up" duration={500}>
                <div className="features_section_card_content">
                  <h3>100% Javascript</h3>
                  <p>
                    Call back anywhere you need, to get the functionality you
                    want, out of the box with our API.
                  </p>
                </div>
              </Slide>
            </Fade>
          </div>

          {/* SINGLE CARD END HERE */}
          {/* SINGLE SECTION CARD START HERE */}
          <div className="features_section_card">
            <div className="features_section_card_icon">
              <Bounce>
                <CheckCircleIcon className="icon" />
              </Bounce>
            </div>
            <Fade>
              <Slide direction="up" duration={500}>
                <div className="features_section_card_content">
                  <h3>Auto-generated documentation</h3>
                  <p>
                    Write and maintain the documentation with a one-click
                    integration.
                  </p>
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
