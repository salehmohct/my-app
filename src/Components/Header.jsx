import React from "react";
import { NavLink } from "react-router-dom";
import { Paths } from "../Router";
const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink to={Paths.home}>HOME</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={Paths.cart}>CART</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
