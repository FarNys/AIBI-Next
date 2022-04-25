import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WhyCards = () => {
  return (
    <div className="why_cards_container">
      <div className="why_cards_box">
        <div className="why_cards_circle"></div>

        <div className="why_cards_header">
          <div className="why_cards_data">
            {" "}
            <h3>TESTIMONIALS</h3>
            <h1>Trusted by thousands of users</h1>
            <p>
              Don’t take our word for it.
              <br />
              Discover what users are saying about us.
            </p>
          </div>
        </div>
        <div className="why_cards_card_container">
          {/* SINGLE CARD LINK STARTED*/}
          <a className="why_cards_card_box" href="#">
            <div className="why_cards_square"></div>
            <div className="why_cards_card_content">
              <div className="why_cards_card_header">
                <h3>Developers</h3> <ArrowForwardIcon className="arrow_icon" />
              </div>
              <div className="why_cards_card_data">
                <p>
                  Don’t take our word for it. Discover what users are saying
                  about us.
                </p>
              </div>
            </div>
          </a>
          {/* SINGLE CARD LINK ENDED */}
          {/* SINGLE CARD LINK STARTED*/}
          <a className="why_cards_card_box" href="#">
            <div className="why_cards_square"></div>
            <div className="why_cards_card_content">
              <div className="why_cards_card_header">
                <h3>Strapi</h3> <ArrowForwardIcon className="arrow_icon" />
              </div>
              <div className="why_cards_card_data">
                <p>
                  Strapi is the leading open-source Headless CMS. Strapi gives
                  developers the freedom to use their favorite tools and
                  frameworks while allowing editors to easily manage their
                  content and distribute it anywhere.
                </p>
              </div>
            </div>
          </a>
          {/* SINGLE CARD LINK ENDED */}
          {/* SINGLE CARD LINK STARTED*/}
          <a className="why_cards_card_box" href="#">
            <div className="why_cards_square"></div>
            <div className="why_cards_card_content">
              <div className="why_cards_card_header">
                <h3>AIBI</h3> <ArrowForwardIcon className="arrow_icon" />
              </div>
              <div className="why_cards_card_data">
                <p>
                  Whatever your profile is, Strapi has been designed to make
                  your experience the easiest possible.
                </p>
              </div>
            </div>
          </a>
          {/* SINGLE CARD LINK ENDED */}
        </div>
      </div>
    </div>
  );
};

export default WhyCards;
