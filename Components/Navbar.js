import React, { useState, useRef, useEffect } from "react";
// import "../Styles/Navbar.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Fade, Bounce, AttentionSeeker } from "react-awesome-reveal";
// import { Link } from "react-router-dom";
import Link from "next/link";

const Navbar = () => {
  const [index, setindex] = useState(0);
  const [getLists, setgetLists] = useState([]);
  const listControl = useRef(null);

  //CHANGE BACKGROUND NAVBAR AFTER SCROLL
  useEffect(() => {
    const getNav = document.querySelector(".navbar_container");
    const changeStyle = () => {
      if (window.scrollY > 100) {
        getNav.classList.add("navbar_container_scroll");
      } else {
        getNav.classList.remove("navbar_container_scroll");
      }
    };
    window.addEventListener("scroll", () => {
      changeStyle();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        changeStyle();
      });
    };
  }, []);
  useEffect(() => {
    const getElements = document.querySelectorAll(".navbar_dynamic_content");
    setgetLists(getElements);
  }, []);

  const hoverHandler = (e) => {
    const getIndex = e.target.getAttribute("data-index");

    if (getIndex === "0" || getIndex === "1" || getIndex === "2") {
      getLists.forEach((el) => {
        el.classList.add("dynamic_hover");
        setTimeout(() => {
          el.style.visibility = "hidden";
        }, 50);
      });
      setTimeout(() => {
        getLists[getIndex].style.visibility = "visible";
      }, 50);
    }
    // console.log(getIndex);
  };

  const hoverLeaveHandler = (e) => {
    const getIndex = e.target.getAttribute("data-index");
    getLists.forEach((el) => {
      el.classList.remove("dynamic_hover");
    });
    if (getIndex === null) {
      const getOut = document.querySelectorAll(".navbar_dynamic_content");
      // console.log(getOut);
      getOut.forEach((el) => {
        el.style.transition = "0.3s ease all";
        setTimeout(() => {
          el.style.visibility = "hidden";
        }, 50);
      });
    }
  };

  const dynamicData = [
    {
      leftSide: [
        { title: "iS This First", list: ["Z 1", "Z 2"] },
        {
          title: "Strapi 2",
          list: [
            <Link href="/features" key={78}>
              Feature
            </Link>,
            <Link href="/why-aibi" key={99}>
              Why AIBI
            </Link>,
            <Link href="/blog" key={1100}>
              Blog
            </Link>,
            "EW 2",
            "EW 2",
            "EW 2",
            "EW 2",
          ],
        },
      ],
      rightSide: [
        {
          imageTag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8psoyFEBCSvt3cpOaaGLw9Pq07wYo7riV_fzFvPFbCpO3-NOD1w4bZcUGOs6eGm7WRc&usqp=CAU",
          text: "Some Text",
          link: "Some Link",
        },
        {
          imageTag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJGhomNjtrP2s8xSOmdzH6TnRdsJNcJct8rPw2Ifz1oodINihwu4P9M_PBgfV0XfHmiQ&usqp=CAU",
          text: "Some Text2",
          link: "Some Link2",
        },
      ],
    },
    {
      leftSide: [
        { title: "Strapi", list: ["Item 1", "Item 2"] },
        {
          title: "Strapi 2",
          list: ["VA 1", "VA 2", "VA 2", "VA 2", "VA 2", "VA 2"],
        },
      ],
      rightSide: [
        {
          imageTag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8psoyFEBCSvt3cpOaaGLw9Pq07wYo7riV_fzFvPFbCpO3-NOD1w4bZcUGOs6eGm7WRc&usqp=CAU",
          text: "Some Text",
          link: "Some Link",
        },
        {
          imageTag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJGhomNjtrP2s8xSOmdzH6TnRdsJNcJct8rPw2Ifz1oodINihwu4P9M_PBgfV0XfHmiQ&usqp=CAU",
          text: "Some Text2",
          link: "Some Link2",
        },
      ],
    },
    {
      leftSide: [
        { title: "SoluTioN", list: ["Item 3", "Item 4"] },
        {
          title: "AIBI 2",
          list: [
            "Product 1",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
            "Product 2",
          ],
        },
      ],
      rightSide: [
        // {
        //   imageTag:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8psoyFEBCSvt3cpOaaGLw9Pq07wYo7riV_fzFvPFbCpO3-NOD1w4bZcUGOs6eGm7WRc&usqp=CAU",
        //   text: "Some Text",
        //   link: "Some Link",
        // },
        {
          imageTag:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJGhomNjtrP2s8xSOmdzH6TnRdsJNcJct8rPw2Ifz1oodINihwu4P9M_PBgfV0XfHmiQ&usqp=CAU",
          text: "Some Text2",
          link: "Some Link2",
        },
      ],
    },
  ];

  return (
    <div className="navbar_container">
      <nav className="navbar_inner">
        <h3>Logo</h3>
        {/* THIS IS EVERY DROP DOWN ITEM IN NAVBAR */}
        <div className="navbar_single_drowdown">
          <ul ref={listControl}>
            <li
              data-index="0"
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverLeaveHandler}
            >
              <a href="#">
                <span></span>Strapi <ArrowDropDownIcon />
              </a>
              <div className="navbar_dynamic_content">
                <div className="navbar_dynamic_top"></div>
                <div className="navbar_dynamic_bot">
                  {dynamicData[0].leftSide.map((item, id) => (
                    <div className="navbar_dynamic_left" key={id}>
                      <h3>{item.title}</h3>
                      <ul>
                        {item.list.map((el) => (
                          <li key={el}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {dynamicData[0].rightSide.map((item, id) => (
                    <div className="navbar_dynamic_right" key={id}>
                      <div className="navbar_dynamic_right_inner">
                        <div className="navbar_data_img">
                          <img src={item.imageTag} alt={item.text} />
                        </div>
                        <div className="navbar_data_data">
                          <h3>{item.text}</h3>
                          <a href="#">{item.link}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li
              data-index="1"
              onMouseOver={hoverHandler}
              onMouseLeave={hoverLeaveHandler}
            >
              <a href="#">
                <span></span>Solution
              </a>
              <div className="navbar_dynamic_content">
                <div className="navbar_dynamic_top"></div>
                <div className="navbar_dynamic_bot">
                  {dynamicData[1].leftSide.map((item, id) => (
                    <div className="navbar_dynamic_left" key={id}>
                      <h3>{item.title}</h3>
                      <ul>
                        {item.list.map((el, index) => (
                          <li key={index}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {dynamicData[1].rightSide.map((item, id) => (
                    <div className="navbar_dynamic_right" key={id}>
                      <div className="navbar_dynamic_right_inner">
                        <div className="navbar_data_img">
                          <img src={item.imageTag} alt={item.text} />
                        </div>
                        <div className="navbar_data_data">
                          <h3>{item.text}</h3>
                          <a href="#">{item.link}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="navbar_dynamic_content">
                <div className="navbar_dynamic_top"></div>
                <div className="navbar_dynamic_bot">
                  {dynamicData[index].leftSide.map((item) => (
                    <div className="navbar_dynamic_left">
                      <h1>{item.title}</h1>
                      <ul>
                        {item.list.map((el) => (
                          <li>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {dynamicData[index].rightSide.map((item) => (
                    <div className="navbar_dynamic_right">
                      <div className="navbar_data_img">
                        <img src={item.imageTag} alt={item.text} />
                      </div>
                      <h3>{item.text}</h3>
                      <a href="#">{item.link}</a>
                    </div>
                  ))}
                </div>
              </div> */}
            </li>
            <li
              data-index="2"
              onMouseOver={hoverHandler}
              onMouseLeave={hoverLeaveHandler}
            >
              <a href="#">
                <span></span>UpperCut
              </a>
              <div className="navbar_dynamic_content">
                <div className="navbar_dynamic_top"></div>
                <div className="navbar_dynamic_bot">
                  {dynamicData[2].leftSide.map((item, id) => (
                    <div className="navbar_dynamic_left" key={id}>
                      <h3>{item.title}</h3>
                      <ul>
                        {item.list.map((el, index) => (
                          <li key={index}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {dynamicData[2].rightSide.map((item, id) => (
                    <div className="navbar_dynamic_right" key={id}>
                      <div className="navbar_dynamic_right_inner">
                        <div className="navbar_data_img">
                          <img src={item.imageTag} alt={item.text} />
                        </div>
                        <div className="navbar_data_data">
                          <h3>{item.text}</h3>
                          <a href="#">{item.link}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* EVERY SINGLE ITEM END */}
        <div className="navbar_side_content">Git Hub</div>
      </nav>
      <li>
        <Link href="/why-aibi">Why</Link>
        <Link href="/features">Features</Link>
      </li>
    </div>
  );
};

export default Navbar;
