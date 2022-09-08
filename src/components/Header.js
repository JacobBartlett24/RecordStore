import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const HeaderStyle = styled.div`
  background-color: black;
  color: white;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  *{
    color: inherit;
    text-decoration: inherit;
    
    margin: 0px;
  }
`
const SideBarStyle = styled.div`
  display: hidden;

`

const SideBarHtml = `
<div>
  <ul>
    <li>Store</li>
    <li>About Us</li>
    <li>FAQ</li>
    <li>Shipping Info</li>
    <li>item</li>
    <li>item</li>
  </ul>
</div>
`


const Header = (props) => {

  const {title} = props

  return(
    
    <HeaderStyle>
      <a href = "#ss" onClick={Navbar}><FontAwesomeIcon icon={faBars} /></a>
      <h1>{title}</h1>
      <a href = "#ss">Menu</a>
    </HeaderStyle>
  );
}

export default Header;
