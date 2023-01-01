import { MagnifyingGlass, ShoppingBagOpen } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu menu-left">
        <li>
          <NavLink to="/featured">Featured</NavLink>
        </li>
        <li>
          <NavLink to="/mens">Mens</NavLink>
        </li>
        <li>
          <NavLink to="/womens">Womens</NavLink>
        </li>
        <li>
          <NavLink to="/accessories">Accessories</NavLink>
        </li>
      </ul>

      <div className="logo">
        <NavLink className="navbar-logo" to="/">
          <h1>
            24 Hours
            <span>KTM STORE</span>
          </h1>
        </NavLink>
      </div>

      <ul className="navbar-menu menu-right">
        <li>
          <button type="button" className="search-btn">
            <MagnifyingGlass />
          </button>
        </li>

        <li>
          <NavLink to="/signin" className="signin-btn">
            sign in
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className="cart-btn">
            <ShoppingBagOpen />
            <span>cart (0)</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
