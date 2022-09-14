import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";

const AdminMenuStyle= styled.div`
height: 100vh;
width: 100vw;
`

function Admin(props){
  return(
    <AdminMenuStyle>
      <div>
        <h1>Admin Menu</h1>
        <button>Add Vinyl</button>
      </div>
    </AdminMenuStyle>
  )
}

export default Admin;