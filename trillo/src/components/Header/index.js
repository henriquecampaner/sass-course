import React from "react";
import { FaSearch, FaRegBookmark } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

import logo from "../../assets/logo.png";
import imgMe from "../../assets/download.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />

      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button type="submit" className="search__button">
          <FaSearch className="search__icon" />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <FaRegBookmark className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <TiMessages className="user-nav__icon" />
          <span className="user-nav__notification">12</span>
        </div>

        <div className="user-nav__user">
          <img src={imgMe} alt="User" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Henrique</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
