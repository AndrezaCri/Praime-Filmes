
import './header.css';
import { Link } from 'react-router-dom'
//https://api.themoviedb.org/3/movie/550?api_key=d4731f525a4f66b129a5e4c237aa579c
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

function Header(){
  return(
    <header>
      <Link className="logo" to="/">Prime Flix</Link>
    </header>
  )
}

export default Header;