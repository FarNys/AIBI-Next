import React from "react";
// import "../Styles/Header.scss";
import ButtonEffect from "../../Util/ButtonEffect";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_line_short">
        <span>
          <h5>New</h5>
        </span>
        <p>StrapiConf 2022 is coming soon 🎤</p>
      </div>
      <div className="header_title">
        <h1>Design APIs fast, manage content easily.</h1>
      </div>
      <div className="header_line_long">
        <h4>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript,
          fully customizable and developer-first.
        </h4>
      </div>
      <div className="header_btn_container global_btn_container">
        <ul>
          <ButtonEffect text="Get Started" classTitle="btn_getstarted" />
          {/* <button className="btn_trydemo">
              Try the live demo<span></span>
            </button> */}
          <ButtonEffect text="Try the live demo" classTitle="btn_trydemo" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
