import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fade, Slide } from "react-awesome-reveal";

const FeaturesData = () => {
  //ADD GSAP SCROLL EFFECT FOR ANIMATING TRIANGLES
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".feature_data_shape_1",
  //         start: "top center",
  //         end: "bottom top",
  //         // markers: true,
  //         scrub: true,
  //         // pan: true,
  //       },
  //     })
  //     .to(".feature_data_shape_1", 3, { y: 500 });
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".feature_data_shape_2",
  //         start: "top center",
  //         end: "bottom top",
  //         // markers: true,
  //         scrub: true,
  //         // pan: true,
  //       },
  //     })
  //     .to(".feature_data_shape_2", 3, { y: -250 });
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".feature_data_shape_3",
  //         start: "top center",
  //         end: "bottom top",
  //         // markers: true,
  //         scrub: true,
  //         // pan: true,
  //       },
  //     })
  //     .to(".feature_data_shape_3", 3, { y: 500 });
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".feature_data_shape_4",
  //         start: "top center",
  //         end: "bottom top",
  //         // markers: true,
  //         scrub: true,
  //         // pan: true,
  //       },
  //     })
  //     .to(".feature_data_shape_4", 3, { y: -250 });
  // }, []);
  //

  //ADD ANIMATION EFFECT TO ANIMATE SVG IMAGES
  useLayoutEffect(() => {
    //SVG IMAGE SRC
    const imgSrc = [
      "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg",
      "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step2-2D_6729998af1.svg",
      "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step3-2D_7bc731eae8.svg",
      "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step5-2D_9d3fc362cc.svg",
    ];
    //VARIABLE TO GET ELEMENTS AND CURRENT DISTANCE OF ELEMENT FROM TOP OF THE PAGE
    const getTarget = document.querySelector(".features_data_img_container");
    const getParentImg = document.querySelector(".features_data_parent_img");
    const getChildImg = document.querySelector(".features_data_child_img");
    const getContent = document.querySelector(".features_data_inner");
    const footer = document.querySelector(".footer_container");
    const animatedFunc = () => {
      console.log("TEST TEST TEST TEST");
      //CURRENT SCROLL POSITION + CURRENT HEIGHT OF DISPLAY (PX)
      const gridHeight = getContent.offsetTop;
      const currScroll = window.scrollY;
      // console.log(document.documentElement);
      const currViewHeight = document.documentElement.clientHeight;
      const footerHeight = footer.offsetTop;
      // console.log(footerHeight);

      //CONDITION TO CHANGE ANIMATION NAME AND IMG SRC
      if (gridHeight + 600 > currScroll) {
        getChildImg.style.transformOrigin = "bottom right";
        getParentImg.style.animation =
          "img-parent-animate-left 0.5s ease forwards";
        getChildImg.style.animation =
          "img-child-animate-left 0.5s ease forwards";
        getChildImg.src = imgSrc[0];
      }
      if (gridHeight + 600 < currScroll) {
        getChildImg.style.transformOrigin = "bottom center";
        getParentImg.style.animation =
          "img-parent-animate-right 0.5s ease forwards";
        getChildImg.style.animation =
          "img-child-animate-right 0.5s ease forwards";
        getChildImg.src = imgSrc[1];
      }
      if (
        gridHeight + 600 * 2 < currScroll &&
        gridHeight + 600 * 3 > currScroll
      ) {
        getChildImg.style.transformOrigin = "bottom right";
        getParentImg.style.animation =
          "img-parent-animate-left 0.5s ease forwards";
        getChildImg.style.animation =
          "img-child-animate-left 0.5s ease forwards";
        getChildImg.src = imgSrc[2];
      }
      if (
        gridHeight + 600 * 3 <
        currScroll
        // gridHeight + 600 * 4 > currScroll
      ) {
        getChildImg.style.transformOrigin = "bottom center";
        getParentImg.style.animation =
          "img-parent-animate-right 0.5s ease forwards";
        getChildImg.style.animation =
          "img-child-animate-right 0.5s ease forwards";
        getChildImg.src = imgSrc[3];
      }
      if (footerHeight < currScroll + 800) {
        getTarget.style.visibility = "hidden";
      } else {
        getTarget.style.visibility = "visible";
      }

      // console.log(gridHeight, currScroll, footerHeight, currViewHeight, footer);
    };
    console.log("Z-Z--Z-Z-Z-Z-Z-Z-Z-Z-Z-Z-ZZ-Z-Z-Z-Z-Z-Z-");
    window.addEventListener("scroll", () => animatedFunc());

    return () => window.removeEventListener("scroll", animatedFunc);
    //ADD LISTENER TO ADD SCROLL EFFECT
  }, []);

  return (
    <div className="features_data_container">
      <div className="features_data_spacer"></div>
      <div className="features_data_img_container">
        <img
          className="features_data_parent_img"
          src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-primary-desktop_e0dab1f509.svg"
          alt="svg"
        />
        <img
          className="features_data_child_img"
          src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step5-2D_9d3fc362cc.svg"
          alt="svg-1"
        />
      </div>

      <div className="features_data_inner">
        <div className="features_data_grid_content">
          <div className="features_data_grid_content_shape_left feature_data_shape_1"></div>
        </div>
        <div className="features_data_grid_content">
          <Slide direction="up">
            <Fade delay={250}>
              <h5>Step 1</h5>
              <h4>
                Easily build apps and digital experiences without the
                distraction of CMS complexities.
              </h4>
              <p>
                Focus your talent on what matters. You can integrate individual
                best-in-class services by third-party vendors and connect any
                framework of your choice.
              </p>
            </Fade>
          </Slide>
        </div>
        <div className="features_data_grid_content">
          {" "}
          <Slide direction="up">
            <Fade delay={250}>
              <h5>Step 2</h5>
              <h4>
                Easily build apps and digital experiences without the
                distraction of CMS complexities.
              </h4>
              <p>
                Focus your talent on what matters. You can integrate individual
                best-in-class services by third-party vendors and connect any
                framework of your choice.
              </p>
            </Fade>
          </Slide>
        </div>
        <div className="features_data_grid_content">
          {" "}
          <div className="features_data_grid_content_shape_right feature_data_shape_2"></div>
        </div>
        <div className="features_data_grid_content">
          {" "}
          <div className="features_data_grid_content_shape_left feature_data_shape_3"></div>
        </div>
        <div className="features_data_grid_content">
          {" "}
          <Slide direction="up">
            <Fade delay={250}>
              <h5>Step 3</h5>
              <h4>
                Easily build apps and digital experiences without the
                distraction of CMS complexities.
              </h4>
              <p>
                Focus your talent on what matters. You can integrate individual
                best-in-class services by third-party vendors and connect any
                framework of your choice.
              </p>
            </Fade>
          </Slide>
        </div>
        <div className="features_data_grid_content">
          <Slide direction="up">
            <Fade delay={250}>
              <h5>Step 4</h5>
              <h4>
                Easily build apps and digital experiences without the
                distraction of CMS complexities.
              </h4>
              <p>
                Focus your talent on what matters. You can integrate individual
                best-in-class services by third-party vendors and connect any
                framework of your choice.
              </p>
            </Fade>
          </Slide>
        </div>
        <div className="features_data_grid_content">
          {" "}
          <div className="features_data_grid_content_shape_right feature_data_shape_4"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesData;
