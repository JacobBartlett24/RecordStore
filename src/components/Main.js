import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png"

const ClickableContentHolder = styled.div`
background-color: red;
width: 300px;
height: 300px;
border: 3px solid black;
margin: 30px;
&:hover{
  background-color: black;
}

`
const MainStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5vh 10vw;

`

const MainImage = styled.div `
background-color: red;
width: 300px;
height 300px;
border: 3px solid black;

`

class AppComponent extends Component{

  
  constructor(props){
    super(props)

    this.state = {

    }
  
  }

  handleImageClick = (e) =>{
    console.log('imageClicked');
  }
  
  render(){
    return(
      <div>
        <MainImage>
        s
        </MainImage>
        <MainStyle>       
            <ClickableContentHolder>
              <a href="#something"><img src={logo} onClick={this.handleImageClick} alt="" /></a>
            </ClickableContentHolder>
            <ClickableContentHolder>
            <a href="#something"><img src={logo} alt="" /></a>
            </ClickableContentHolder>
        </MainStyle>
      </div>
    );
  }
}

export default AppComponent;