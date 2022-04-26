import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <div className="blog_header_container">
      <div className="blog_header_content_container">
        <h2>Three Ways to Use Strapi Policies</h2>
        <h3>
          Policies are functions that execute specific logic on each request
          before it reaches the controller. They are mostly used for securing
          business logic.
        </h3>
        <div className="blog_category_time_container">
          <Link href="#">
            <div className="blog_category_time_container_icon">
              <BsFillCircleFill />
              <h4>Tutorial</h4>
            </div>
          </Link>

          <h6>5 MIN READ</h6>
        </div>
      </div>

      <div className="blog_header_img_container">
        <div className="blog_header_img_box">
          <Link href="#">
            <img
              src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Image_Media_Section_3_Icons_3_89f3bd6e85.jpg"
              alt="tutorial img"
              className="blog_header_image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
