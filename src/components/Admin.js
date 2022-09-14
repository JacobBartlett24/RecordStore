import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";

const AdminMenuStyle= styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const FormStyle = styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 50%;
align-items: center;
justify-content: center;
background-color: #f2f2f2;
border-radius: 3px;
input{
  margin: 1rem 0 1rem 0;
  display: block;
}
`

function Admin(props){
  return(
    <AdminMenuStyle>
      <FormStyle>
        <h1>Admin Menu</h1>
        <form>
          <label>
            Artist Name:
          </label>
          <input></input>
          <label>
            Price:
          </label>
          <input></input>
        </form>
        <button>Add Vinyl</button>
      </FormStyle>
    </AdminMenuStyle>
  )
}

export default Admin;