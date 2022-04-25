import React from "react";
import Triangle from "../../Util/Triangle";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Fade, Slide } from "react-awesome-reveal";
const WhyFeatures = () => {
  return (
    <div className="why_features_container">
      <div className="why_features_box">
        <Triangle classTitle="triangle_left" />
        <div className="why_features_text_box">
          {/* SINGLE CARD STARTED HERE */}
          <div className="why_feature_card">
            <Fade>
              <Slide direction="up">
                <div className="why_featue_card_header telegram">
                  <TelegramIcon />
                  <h3>Telegram</h3>
                </div>
                <div className="why_featue_card_text">
                  With universal connectivity, unrivaled customization,
                  unbeatable control, and unstoppable productivity.
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
          {/* SINGLE CARD STARTED HERE */}
          <div className="why_feature_card">
            <Fade>
              <Slide direction="up">
                <div className="why_featue_card_header whatsApp">
                  <WhatsAppIcon />
                  <h3>WhatsApp</h3>
                </div>
                <div className="why_featue_card_text">
                  With universal connectivity, unrivaled customization,
                  unbeatable control, and unstoppable productivity.
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
          {/* SINGLE CARD STARTED HERE */}
          <div className="why_feature_card">
            <Fade>
              <Slide direction="up">
                <div className="why_featue_card_header facebook">
                  <FacebookIcon />
                  <h3>Facebook</h3>
                </div>
                <div className="why_featue_card_text">
                  Build top-notch omnichannel digital experiences. Break free
                  from content silos and start distributing your content from
                  one CMS to any digital product, channel or device.
                </div>
              </Slide>
            </Fade>
          </div>
          {/* SINGLE CARD END HERE */}
        </div>
        <Triangle classTitle="triangle_right" />
      </div>
    </div>
  );
};

export default WhyFeatures;
