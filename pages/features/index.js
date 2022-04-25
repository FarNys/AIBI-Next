import features_Svg from "../../assets/svgs/features_svg.svg";
import ButtonEffect from "../../Util/ButtonEffect";
import Layout from "../../Components/Layout";
import {
  AttentionSeeker,
  Bounce,
  Fade,
  Slide,
  Zoom,
} from "react-awesome-reveal";
import FeaturesCards from "../../Components/Features/FeaturesCards";
import FeaturesSection from "../../Components/Features/FeaturesSection";
import FeaturesContent from "../../Components/Features/FeaturesContent";
import FeaturesGrid from "../../Components/Features/FeaturesGrid";
import FeaturesScroll from "../../Components/Features/FeaturesScroll";
import FeaturesData from "../../Components/Features/FeaturesData";
import FeaturesDataMobile from "../../Components/Features/FeaturesDataMobile";
const Features = () => {
  return (
    <Layout title="Features">
      <div className="features_container">
        <div className="features_header_container">
          <Fade delay={500} duration={1250}>
            <Slide direction="up">
              <div className="features_header_box">
                <h5>FEATURES</h5>
                <h1>Unlock the full potential of content management</h1>
                <p>
                  Strapi is the leading open-source headless CMS. It’s 100%
                  Javascript, fully customizable and developer-first.
                </p>
                <div>
                  <div className="global_btn_container">
                    <ul>
                      <Bounce delay={1000}>
                        <ButtonEffect />
                      </Bounce>
                    </ul>
                  </div>
                </div>

                <div className="feature_svg_container">
                  <img
                    src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/features-hero_ca8edd6243.svg"
                    alt="Feature Svg"
                  />
                </div>
              </div>
            </Slide>
          </Fade>
        </div>
        <FeaturesCards />
        <FeaturesSection />
        <FeaturesContent />
        <FeaturesGrid />
        <FeaturesScroll />
        <FeaturesData />
        <FeaturesDataMobile />
      </div>
    </Layout>
  );
};
export default Features;
