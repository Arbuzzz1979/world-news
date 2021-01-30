import React from "react";
//ReactRouter
import {Link} from 'react-router-dom'

const NavLang = () => {
  return (
    <ul>
      <li><Link to="/us">us</Link></li>
      <li><Link to="/ru">ru</Link></li>
      <li><Link to="/ua">ua</Link></li>
    </ul>
  );
};

export default NavLang;
