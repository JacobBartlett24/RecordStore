import React, {Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

class App extends Component{
  
  render(){
    return(
      <div>  
        <Header title = 'Record Store'/>
        <Main />
        <Footer title = 'Footer'/>
      </div>
    );
  }
}

export default App;
