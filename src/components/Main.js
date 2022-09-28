import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png"
import vinyl from "../images/vinyl_PNG63.png"
import shirt from "../images/6298b026a65cf80bcf9dce061e9b79c9.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ClickableContentHolder = styled.div`
width: 300px;
height: 300px;
margin: 0px 100px 0px 100px;
overflow: hidden;
`
const MainStyle = styled.div`
display: grid;
grid-template-rows: 30vh 60vh;
margin: 5vh 10vw 0 10vw;
justify-items: center;
`

const MainImage = styled.div `
overflow: hidden;

width: 300px;
height 300px;
border: 3px solid black;

`
const ClickableContentHolderWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

#vinyl{
  overflow: hidden;
  width: 300px;
  height 300px;
}

#shirt{
  overflow: hidden;
  width: 300px;
  height 300px;
  
}
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
                <Link to = "/store">
                <ClickableContentHolder>
                  <a href="#something"><img id = 'vinyl' src={vinyl} onClick={this.handleImageClick} alt="" /></a>
                </ClickableContentHolder>
                </Link>
                <ClickableContentHolder>
                  <a href="#something"><img id = 'shirt'src={shirt} alt="" /></a>
                </ClickableContentHolder>
              </ClickableContentHolderWrapper>
            
        </MainStyle>
      </div>
    );
  }
}

export default AppComponent;