import React, { useState } from "react";
import "./Header.css";
function Header(props) {
  const nav_list_menu = [
    {
      id: 1,
      name: "Swap",
      link: "#",
      classList: "active_link",
    },
    {
      id: 2,
      name: "Liquidity",
      link: "#",
      classList: "",
    },
    {
      id: 3,
      name: "Staking",
      link: "#",
      classList: "",
    },
    {
      id: 4,
      name: "Farm",
      link: "#",
      classList: "",
    },
    {
      id: 5,
      name: "Reward",
      link: "#",
      classList: "",
    },
  ];

  const nav_list_user = [
    {
      id: 1,
      amount: "$0.0055",
      action: "#",
      icon: require("../../Static/img/icons/icon1.png"),
    },
    {
      id: 2,
      amount: "$0.0055",
      action: "#",
      icon: require("../../Static/img/icons/icon2.png"),
    },
    {
      id: 3,
      amount: "$0.0004",
      action: "#",
      icon: require("../../Static/img/icons/icon3.png"),
    },
  ];
  const [scrollClass, setScrollClass] = useState("");
  window.addEventListener("scroll", (e) => {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      setScrollClass("HeaderScrollActive");
    } else {
      setScrollClass("");
    }
  });

  const [navToggle, setNavToggle] = useState(false);

  return (
    <header
      id="Header"
      className={`${scrollClass} ${navToggle ? "toggleActiveHeader" : ""}`}
    >
      <div className="header_container">
        <nav id="header_nav">
          <button
            className="nav_toggle_btn"
            onClick={() => setNavToggle(!navToggle)}
          >
            {navToggle ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="hidden mr-6 text-4xl cursor-pointer lg:block"
                height="2.3rem"
                width="2.3rem"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 99 }}
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144m224 0L144 368"
                />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="hidden mr-6 text-4xl cursor-pointer lg:block"
                height="2.3rem"
                width="2.3rem"
                xmlns="http://www.w3.org/2000/svg"
                style={{ zIndex: 99 }}
              >
                <path
                  fill="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={48}
                  d="M88 152h336M88 256h336M88 360h336"
                />
              </svg>
            )}
          </button>
          <a href="#" className="logo_link">
            <img src={require("../../Static/img/logo.png")} alt="logo" />
          </a>
          <ul className="nav_list_menu">
            {nav_list_menu.map((v) => {
              return (
                <li key={v.id}>
                  <a href={v.link} className={v.classList}>
                    {v.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav_list_user">
            {nav_list_user.map((v) => {
              return (
                <li key={v.id}>
                  <button className="nav_light_btn">
                    <img src={v.icon} alt="icon" /> {v.amount}
                  </button>
                </li>
              );
            })}

            <li>
              <button className="connect_btn">Connect Wallet</button>
            </li>
          </ul>
        </nav>
      </div>
      <HeaderAside
        navToggle={navToggle}
        nav_list_menu={nav_list_menu}
        nav_list_user={nav_list_user}
      ></HeaderAside>
    </header>
  );
}

export default Header;

const HeaderAside = ({ navToggle, nav_list_menu, nav_list_user }) => {
  return (
    <aside id="HeaderAside" className={navToggle ? 'HeaderAsideActive': ''}>
      <div className={`aside_box_wrapper ${navToggle ? 'aside_active': ''}`}>
        <ul className="nav_list_menu">
          {nav_list_menu.map((v) => {
            return (
              <li key={v.id}>
                <a href={v.link} className={v.classList}>
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="aside_nav_content">
          <ul className="nav_list_user_box">
            {nav_list_user.map((v) => {
              return (
                <li key={v.id}>
                  <button className="nav_light_btn">
                    <img src={v.icon} alt="icon" /> {v.amount}
                  </button>
                </li>
              );
            })}
          </ul>
          <strong>Total Value Locked</strong>
          <strong>$2,649.86</strong>
        </div>
      </div>
    </aside>
  );
};
