import React, {Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Store from "./components/Store"
import styled from "styled-components";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App(){

  return(
    <div>  
      <Router>
      <Header title = 'Record Store'/>
      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
      <Footer title = 'Footer'/>
    </div>
  );
}

export default App;
