import React from "react";
import { Bounce } from "react-awesome-reveal";
import ButtonEffect from "../../Util/ButtonEffect";
const FeaturesContent = () => {
  return (
    <div className="features_content_container">
      <div className="features_content_box">
        {/* START EVERY FEATURES ROW   */}
        <div className="features_content_inner">
          <div className="features_content_inner_content">
            <h3>Check This</h3>
            <p>
              Create one-off pages that have unique content structure: homepage,
              menu, SEO settings. Learn more
            </p>
            <div className="global_btn_container features_btn_container">
              <ul>
                <Bounce>
                  <ButtonEffect />
                </Bounce>
              </ul>
            </div>
          </div>
          <div className="features_content_inner_img">
            <img
              src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_1058_99cee1f361.svg"
              alt="content"
            />
          </div>
        </div>
        {/* END EVERY FEATURES ROW   */}
        {/* START EVERY FEATURES ROW   */}
        <div className="features_content_inner">
          <div className="features_content_inner_content">
            <h3>Customizable API</h3>
            <p>
              With Strapi, you can just hop in your code editor and edit the
              code to fit your API to your needs.
            </p>
            <div className="global_btn_container features_btn_container">
              <ul>
                <Bounce>
                  <ButtonEffect />
                </Bounce>
              </ul>
            </div>
          </div>
          <div className="features_content_inner_img">
            <img
              src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Customizable_API_1_c4fa92461c.svg"
              alt="content"
            />
          </div>
        </div>
        {/* END EVERY FEATURES ROW   */}
        {/* START EVERY FEATURES ROW   */}
        <div className="features_content_inner">
          <div className="features_content_inner_content">
            <h3>Internationalization</h3>
            <p>
              Create multilingual websites or apps. Localize content by
              translating the text and adapting the messaging & structure of the
              page to each version.
            </p>
            <div className="global_btn_container features_btn_container">
              <ul>
                <Bounce>
                  <ButtonEffect />
                </Bounce>
              </ul>
            </div>
          </div>
          <div className="features_content_inner_img">
            <img
              src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/language_new_4263fb692d.svg"
              alt="content"
            />
          </div>
        </div>
        {/* END EVERY FEATURES ROW   */}
        {/* START EVERY FEATURES ROW   */}
        <div className="features_content_inner">
          <div className="features_content_inner_content">
            <h3>Customizable API</h3>
            <p>
              With Strapi, you can just hop in your code editor and edit the
              code to fit your API to your needs.
            </p>
            <div className="global_btn_container features_btn_container">
              <ul>
                <Bounce>
                  <ButtonEffect />
                </Bounce>
              </ul>
            </div>
          </div>
          <div className="features_content_inner_img">
            <img
              src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Customizable_API_1_c4fa92461c.svg"
              alt="content"
            />
          </div>
        </div>
        {/* END EVERY FEATURES ROW   */}
      </div>
    </div>
  );
};

export default FeaturesContent;
