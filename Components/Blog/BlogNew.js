import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Link from "next/link";
import ButtonEffect from "../../Util/ButtonEffect";

const BlogNew = () => {
  return (
    <div className="blog_new_container">
      <div className="blog_new_title">
        <h2>Latest Blogs</h2>
      </div>
      <div className="blog_new_content_container">
        <div className="blog_new_content_box">
          <div className="blog_new_content">
            <div className="blog_new_content_image_container">
              <Link href="https://www.google.com/">
                <a>
                  <img
                    src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_84_5_afc93d7066.png"
                    alt="tutorial img"
                    className="blod_new_img"
                  />
                </a>
              </Link>
            </div>
            <div className="blog_new_content_content">
              <Link href="#">
                <h3>Build an app in leass than 10mins with strapi CMS</h3>
              </Link>

              <div className="blog_category_time_container">
                <Link href="#">
                  <div className="blog_category_time_container_icon">
                    <BsFillCircleFill />
                    <h4>Tutorial</h4>
                  </div>
                </Link>

                <h6>5 MIN READ</h6>
              </div>
              <div className="blog_category_time_container blog_writer_date_container">
                <div className="blog_category_time_container_icon">
                  <BsFillCircleFill />
                </div>
                <h5>Farid </h5>

                <h6>June 22, 2021</h6>
              </div>
            </div>
          </div>
          <div className="blog_new_content">
            <div className="blog_new_content_image_container">
              <Link href="#">
                <img
                  src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_84_5_afc93d7066.png"
                  alt="tutorial img"
                  className="blod_new_img"
                />
              </Link>
            </div>
            <div className="blog_new_content_content">
              <Link href="#">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam,
                </h3>
              </Link>
              <div className="blog_category_time_container">
                <Link href="#">
                  <div className="blog_category_time_container_icon">
                    <BsFillCircleFill />
                    <h4>Tutorial</h4>
                  </div>
                </Link>

                <h6>5 MIN READ</h6>
              </div>
              <div className="blog_category_time_container blog_writer_date_container">
                <div className="blog_category_time_container_icon">
                  <BsFillCircleFill />
                </div>
                <h5>Mehdi </h5>

                <h6>June 9, 2021</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_new_register_container">
          <div className="blog_new_register_box">
            <h2>Get Started</h2>
            <p>
              Simply copy and paste the following command line in your terminal
              to create your first Strapi project.
            </p>
            <div className="global_btn_container blog_register_btn_container">
              <ul>
                <ButtonEffect text="Copy" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNew;
