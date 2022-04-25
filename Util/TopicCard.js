import React from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import "../Styles/TopicCard.scss";
import { Bounce, Fade, Roll, Slide } from "react-awesome-reveal";

const TopicCard = ({ title = "ADD SOME TITLE", text = "ADD SOME TEXT" }) => {
  return (
    <div className="topic_card_container">
      <div className="topic_card_header">
        <Bounce delay={300}>
          {/* <CheckCircleIcon className="topic_card_icon" /> */}
        </Bounce>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TopicCard;
