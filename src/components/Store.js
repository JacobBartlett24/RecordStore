import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer"
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

const ItemStyle = styled.div`

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
      <div>
        <img src={logo} alt="">
        </img>
        <h1>2</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>3</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>4</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>5</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>6</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>7</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>8</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>9</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>10</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>11</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>12</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>13</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>14</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>15</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>16</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>17</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>18</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>19</h1>
        <button>Add To Cart</button>
      </div>
      <div>
        <img src={logo} alt="">
        </img>
        <h1>20</h1>
        <button>Add To Cart</button>
      </div>
    </StoreStyle>
  );
  
}

export default Store;