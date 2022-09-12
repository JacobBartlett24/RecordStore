import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer"

const StoreStyle = styled.div`
display: grid;
grid-template-rows: repeat(5, 18vh);
grid-template-columns: repeat(5, 15vw);
margin: 5vh 10vw 5vh 10vw;
justify-items: center;

div{
  width: 15vw;
  height: 18vh;
  border: 3px solid black;
}
`


function Store(props){


  return(
    <StoreStyle>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StoreStyle>
  );
  
}

export default Store;