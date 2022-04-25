import React from "react";
// import "./../Styles/Footer.scss";
import { AiFillTrademarkCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_inner">
        <div className="footer_content_container">
          <img
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Gatsby-Monogram_dae6f92141.svg"
            alt="Logo"
          />
          <p>
            Strapi is the leading open-source Headless CMS. Strapi gives
            developers the freedom to use their favorite tools and frameworks
            while allowing editors to easily manage their content and distribute
            it anywhere.
          </p>
        </div>
        <div className="footer_column_container">
          <div className="footer_column_card">
            <h4>PRODUCT</h4>
            <a href="#">Strapi v4</a>
            <a href="#">Strapi v5</a>
            <a href="#">Strapi v6</a>
            <a href="#">Strapi v7</a>
          </div>
          <div className="footer_column_card">
            <h4>SOLUTIONS</h4>
            <a href="#">solutions v4</a>
            <a href="#">solutions v5</a>
            <a href="#">solutions v6</a>
            <a href="#">solutions v7</a>
            <a href="#">solutions v7</a>
            <a href="#">solutions v7</a>
          </div>
          <div className="footer_column_card">
            <h4>RESOURCES</h4>
            <a href="#">Resources v4</a>
            <a href="#">Resources v5</a>
            <a href="#">Resources v6</a>
            <a href="#">Resources v1</a>
          </div>
          <div className="footer_column_card">
            <h4>INTEGRATIONS</h4>
            <a href="#">Integration v4</a>
            <a href="#">Integration v5</a>
          </div>
        </div>
      </div>
      <div className="allright_container">
        Allright reserved{" "}
        <span>
          <AiFillTrademarkCircle />
        </span>
      </div>
    </div>
  );
};

export default Footer;
