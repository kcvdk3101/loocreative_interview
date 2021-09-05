import React from "react";
import logo from "../../images/-e-logo_icon_1.png";
import { slide as Menu } from "react-burger-menu";

const navItems = [
  {
    link: "/home",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/product",
    title: "Product",
  },
  {
    link: "/support",
    title: "Support",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const Navigation = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#b1ccff" }}>
      <nav className="container navbar">
        <div className="navbar__sidebar">
          <Menu width={"auto"}>
            {navItems.map((n, i) => (
              <li key={i}>
                <a href={n.link}>{n.title}</a>
              </li>
            ))}
          </Menu>
        </div>
        <div className="navbar__img">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar__links">
          {navItems.map((n, i) => (
            <li key={i} className={i === 0 ? "active" : ""}>
              <a href={n.link}>{n.title}</a>
            </li>
          ))}
        </ul>
        <div className="navbar__buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-join">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
