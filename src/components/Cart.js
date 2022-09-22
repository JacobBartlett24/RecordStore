import styled from "styled-components";
import React, { Component } from "react";
import {useState} from "react"

const CartStyle= styled.div`
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
overflow: scroll;
input{
  margin: 1rem 0 1rem 0;
  display: block;
}
`


function Cart(props){
  

  return(
    <CartStyle>
      <FormStyle>
        <h1>Cart</h1>
      </FormStyle>
    </CartStyle>
  );
}

export default Cart;