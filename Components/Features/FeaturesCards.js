import React from "react";
import {
  AttentionSeeker,
  Bounce,
  Fade,
  Slide,
  Zoom,
} from "react-awesome-reveal";
const FeaturesCards = () => {
  return (
    <div className="features_feature_container">
      {/* SINGLE FEATURE CARD STARTS HERE */}
      <div className="features_feature_card">
        <Bounce>
          <img
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/features-simplicity_54ec131fa0.svg"
            alt="simplicity"
          />
        </Bounce>
        <Slide direction="up">
          <Fade>
            <h3>Simplicity by design</h3>
            <p>
              The Strapi interface is so intuitive you don't have to think twice
              to build your content types.
            </p>
          </Fade>
        </Slide>
      </div>
      {/* END FEATURE CARD */}
      {/* SINGLE FEATURE CARD STARTS HERE */}
      <div className="features_feature_card">
        <Bounce>
          <img
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-icon-opensource_6b185eafaf.svg"
            alt="customization"
          />
        </Bounce>
        <Slide direction="up" delay={250}>
          <Fade delay={250}>
            <h3>Customization by default</h3>
            <p>
              You just need to hop in a code editor to make any change to the
              API or your data structure.
            </p>
          </Fade>
        </Slide>
      </div>
      {/* END FEATURE CARD */}
      {/* SINGLE FEATURE CARD STARTS HERE */}
      <div className="features_feature_card">
        <Bounce>
          <img
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/features-flexibility_d35c19d8c0.svg"
            alt="flexibity"
          />
        </Bounce>
        <Slide direction="up" delay={500}>
          <Fade delay={500}>
            <h3>Flexibility by nature</h3>
            <p>
              The Content Type structure can be flexed according to your needs
              with dozens of fields available and mix-and-match possibilities.
            </p>
          </Fade>
        </Slide>
      </div>
      {/* END FEATURE CARD */}
    </div>
  );
};

export default FeaturesCards;
