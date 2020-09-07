/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaHome,
  FaKey,
  FaPlaneDeparture,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <FaHome className="side-nav__icon" />
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <FaPlaneDeparture className="side-nav__icon" />
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <FaKey className="side-nav__icon" />
            <span>Car Rental</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <FaMapMarkedAlt className="side-nav__icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2020 by Trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
