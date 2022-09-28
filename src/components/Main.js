import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/image-from-rawpixel-id-6338463-png.png"
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
background-color: gray;
display: grid;
grid-template-rows: 30vh 60vh;
grid-gap: 5rem 16rem;
padding: 5vh 5vw 5vh 5vw;
justify-items: center;
`

const MainImage = styled.div `
overflow: hidden;

width: 300px;
height 300px;

#logo{
  overflow: hidden;
  width: 300px;
  height 300px; 
}
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
              <img id = 'logo' src={logo} alt="" />
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