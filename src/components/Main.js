import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png"

const ClickableContentHolder = styled.div`
background-color: red;
width: 300px;
height: 300px;
border: 3px solid black;
margin: 30px;
overflow: hidden;
&:hover{
  background-color: black;
}

`
const MainStyle = styled.div`
display: grid;
grid-template-rows: 30vh 60vh;
margin: 5vh 10vw 0 10vw;
justify-items: center;

`

const MainImage = styled.div `
overflow: hidden;
background-color: red;
width: 300px;
height 300px;
border: 3px solid black;

`
const ClickableContentHolderWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
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
        
        <MainStyle>       
            <MainImage>
            <img src={logo} alt="" />
            </MainImage>
            
              <ClickableContentHolderWrapper>
                <ClickableContentHolder>
                  <a href="#something"><img src={logo} onClick={this.handleImageClick} alt="" /></a>
                </ClickableContentHolder>
                <ClickableContentHolder>
                <a href="#something"><img src={logo} alt="" /></a>
                </ClickableContentHolder>
              </ClickableContentHolderWrapper>
            
        </MainStyle>
      </div>
    );
  }
}

export default AppComponent;