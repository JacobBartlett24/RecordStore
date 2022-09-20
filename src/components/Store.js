import React, { Component, useEffect } from "react";

import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";
import { useState } from "react";

const axios = require('axios');
const url = 'htt[://localhost:5000/'

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

  const [vinyList, setVinylList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/get')
    .then((res) => {
      setVinylList(res.data)
    })
  }, [])

  return(
    <StoreStyle>
      {vinyList.map((val) => {
        return(
        <div> 
          <img src={logo} alt="" />
          <h1>{val.title}</h1>
          <button>Add To Cart</button>
        </div>
        )
      })}
    </StoreStyle>
  );
  
}

export default Store;