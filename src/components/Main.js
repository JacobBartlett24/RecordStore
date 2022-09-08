import React, { Component } from "react";
import styled from "styled-components";


const ClickableContentHolder = styled.div`
background-color: red;
width: 300px;
height: 300px;
border: 3px solid black;
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
  
  render(){
    
    return(
      <div>
        <MainImage>
        s
        </MainImage>
        <MainStyle>
        
            <ClickableContentHolder>
              Vinyl
            </ClickableContentHolder>
            <ClickableContentHolder>
              Merch
            </ClickableContentHolder>
        </MainStyle>
      </div>
    );
  }
}

export default AppComponent;