import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const WhySection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".why_page_container",
          start: "top center",
          end: "bottom top",
          // markers: true,
          scrub: true,
          // pan: true,
        },
      })
      .to(".why_section_img_container img", 10, { y: -500 });
  }, []);
  return (
    <div className="why_section_container">
      <div className="why_section_img_container">
        <img
          src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/why-strapi-interface_133a162968.svg"
          alt="why_logo"
        />
      </div>
    </div>
  );
};

export default WhySection;
