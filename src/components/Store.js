import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer"

const StoreStyle = styled.div`
display: grid;
grid-template-rows: 30vh 60vh;
margin: 5vh 10vw 0 10vw;
justify-items: center;
`


function Store(props){


  return(
    
    <div>
      <StoreStyle>
        
      </StoreStyle>
    </div>
    
  );
  
}

export default Store;