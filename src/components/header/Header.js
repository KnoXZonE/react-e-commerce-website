import React from "react";
import NavBar from "./NavBar";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="custom-container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
