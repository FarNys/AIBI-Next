import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaReact,
  FaArrowRight,
  FaPython,
  FaMicrosoft,
  FaTwitter,
} from "react-icons/fa";

const FeaturesScroll = () => {
  //   let inHeight = innerHeight;
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const getEl = document.querySelector(".feature_scroll_card");
    console.log(getEl.clientHeight);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".features_scroll_inner",
          start: "top top",
          end: "bottom center",
          // markers: true,
          scrub: true,
          pin: true,
        },
      })
      .to(".f_card_2", 1, { opacity: 1, y: -600 })
      .to(".f_card_3", 1, { opacity: 1, y: -600 })
      .to(".f_card_4", 1, { opacity: 1, y: -600 });
  }, []);
  return (
    <div className="features_scroll_container">
      <div className="features_scroll_inner">
        <h1>Web Stack</h1>
        <div className="features_scroll_box">
          {/*START POSITION OF FIRST CARD! */}
          <div className="feature_scroll_card f_card_1">
            <div className="feature_scroll_card_top">
              <FaReact className="scroll_icon" />
              <p>01/04</p>
            </div>
            <h3>JavaScript library</h3>
            <p>
              Declarative. React makes it painless to create interactive UIs.
            </p>
            <ul>
              <li>
                <a href="#" title="link to nowhere">
                  Discover{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/*END POSITION OF FIRST CARD! */}
          {/*START POSITION OF THER CARDS! */}
          <div className="feature_scroll_card_Container">
            {/*START SCROLLED CARD  */}
            <div className="feature_scroll_card f_card_not_1 f_card_2">
              {" "}
              <div className="feature_scroll_card_top">
                <FaPython className="scroll_icon" />
                <p>02/04</p>
              </div>
              <h3>Programming Language</h3>
              <p>
                Python is a high-level, general-purpose programming language.
                Its design philosophy emphasizes code readability with the use
                of significant indentation.
              </p>
              <ul>
                <li>
                  <a href="#" title="link to nowhere">
                    Discover{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*END SINGLE SCROLLED CARD*/}
            {/*START SCROLLED CARD  */}
            <div className="feature_scroll_card f_card_not_1 f_card_3">
              {" "}
              <div className="feature_scroll_card_top">
                <FaMicrosoft className="scroll_icon" />
                <p>03/04</p>
              </div>
              <h3>Tech Company</h3>
              <p>
                News and features for people who use and are interested in
                Windows, including announcements from Microsoft and its partners
              </p>
              <ul>
                <li>
                  <a href="#" title="link to nowhere">
                    Discover{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*END SINGLE SCROLLED CARD*/}
            {/*START SCROLLED CARD  */}
            <div className="feature_scroll_card f_card_not_1 f_card_4">
              {" "}
              <div className="feature_scroll_card_top">
                <FaTwitter className="scroll_icon" />
                <p>04/04</p>
              </div>
              <h3>Social Media</h3>
              <p>
                From breaking news and entertainment to sports and politics, get
                the full story with all the live commentary.
              </p>
              <ul>
                <li>
                  <a href="#" title="link to nowhere">
                    Discover{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*END SINGLE SCROLLED CARD*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesScroll;
