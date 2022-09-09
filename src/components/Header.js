import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

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

var NavbarStyle = styled.div`
  display: none;
`



class Header extends Component{

  constructor(props){

    super(props)

    this.state = {

    }
  }

  enableSidebar = (e) =>{
    NavbarStyle = `
      display: show;
    `
  
    console.log('clicked');
  }

  render(){
    const {title} = this.props;
  return(
    <div>
      
      <HeaderStyle>
        <a href="#ss" onClick={this.enableSidebar}><FontAwesomeIcon icon={faBars} /></a>
        <h1>{title}</h1>
        <a href = "#ss">Menu</a>
      </HeaderStyle>
      <NavbarStyle>
        <ul>
          <li><FontAwesomeIcon icon={faRecordVinyl} />Store</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Shipping Info</li>
        </ul>
      </NavbarStyle>
    </div>
  );}
}

export default Header;
