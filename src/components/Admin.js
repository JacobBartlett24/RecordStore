import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";
import { useState } from "react";

const AdminMenuStyle= styled.div`
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
input{
  margin: 1rem 0 1rem 0;
  display: block;
}
`

function Admin(props){

  const [value,setValues] = useState({
    name: '',
    imgLink: '',
    price: '',
  });
  

  function handleSubmit(event){
    console.log('here');
    alert('A name was submitted: ' + value.name);
    event.preventDefault();
  }

  function handleChangeLink(event){
    event.persist();
    setValues((value) => ({
      ...value,
      imgLink: event.target.value,
    }))
    console.log(value.imgLink)
  }

  function handleChangeName(event){
    event.persist();
    setValues((value) => ({
      ...value,
      name: event.target.value,
    }))
    console.log(value.name)
  }

  function handleChangePrice(event){
    event.persist();
    setValues((value) => ({
      ...value,
      price: event.target.value,
    }))
    console.log(value.price)
  }

  return(
    <AdminMenuStyle>
      <FormStyle>
        <h1>Admin Menu</h1>
        <form 
          onSubmit={handleSubmit}>

          <label>
            Link to IMG:
          <input 
            type='text' 
            name={value.imgLink}
            onChange={handleChangeLink}/>  
          </label>

          <label>
            Artist Name:
            <input 
              type='text' 
              name={value.name}
              onChange={handleChangeName}/>
          </label>
          
          <label>
            Price:
            <input 
              type='text' 
              name={value.price}
              onChange={handleChangePrice}/>
          </label>

          <input 
          type = 'submit' 
          value= 'Add Title'
          onSubmit={handleSubmit}/>
            
        </form>
        
      </FormStyle>
    </AdminMenuStyle>
  )
}

export default Admin;