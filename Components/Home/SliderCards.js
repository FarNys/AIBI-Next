import React from "react";
import { Slide } from "react-awesome-reveal";
// import "../Styles/SliderCards.scss";
import TopicCard from "../../Util/TopicCard";
import SquareSvg from "../../Util/SquareSvg";

const SliderCards = () => {
  return (
    <div className="slidercards_container">
      <div className="slidercards_box_square">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={false}
          style={{ transform: "rotate(90deg)" }}
        />
        <div className="slidercards_box">
          {/* START SLIDING A CARD FROM LEFT*/}
          <Slide className="slider_card_slide">
            <TopicCard
              text="Get set up in minutes to build projects in hours instead of weeks."
              title="Drastically shorten your time-to-deploy."
            />
          </Slide>
          {/* END SLIDING A CARD */}
          {/* START SLIDING A CARD FROM RIGHT*/}
          <Slide direction="right" className="slider_card_slide">
            <TopicCard
              text="Get set up in minutes to build projects in hours instead of weeks."
              title="Drastically shorten your time-to-deploy."
            />
          </Slide>
          {/* END SLIDING A CARD */}
          {/* START SLIDING A CARD FROM LEFT*/}
          <Slide className="slider_card_slide">
            <TopicCard
              text="Get set up in minutes to build projects in hours instead of weeks."
              title="Drastically shorten your time-to-deploy."
            />
          </Slide>
        </div>
        {/* END SLIDING A CARD */}
      </div>
    </div>
  );
};

export default SliderCards;
