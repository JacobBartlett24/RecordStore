import React, { Component } from "react";

import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";

const StoreStyle = styled.div`
display: grid;
grid-template-rows: repeat(auto-fill, 50vh);
grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
grid-gap: 4rem 4rem;
margin: 5vh 5vw 5vh 5vw;
justify-items: center;

div{
  width: 100%;
  height: 100%;
  border: 3px solid black;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
}
`

function Store(props){

  return(
    <StoreStyle>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>1</h1>
        <button>Add To Cart</button>
      </div>
    </StoreStyle>
  );
  
}

export default Store;