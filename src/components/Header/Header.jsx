import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo1 from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { MdOutlineMenu } from "react-icons/md";
import "./Header.css";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-item-center justify-content-between">
            {/* ============== LOGO ============== */}
            <div className="logo">
              <img src={logo1} className="" alt="logo" />
            </div>
            {/* ============== LOGO END ============== */}
            {/* ============== MENU START ============== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============== MENU END ============== */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btn d-flex align-items-center gap-4">
                <button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </button>
              </div>
              <span className="mobile__menu">
                {/* <i class="ri-menu-3-line"></i> */}
                <MdOutlineMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
