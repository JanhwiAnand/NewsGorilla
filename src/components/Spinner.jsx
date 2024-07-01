// import React, { Component } from 'react'
import React from 'react';
import loader from './loader.gif'
//change to function based
// export default class Spinner extends Component {
const Spinner=()=>{
  // render() {
    return (
      <div>
        <img src={loader} alt="loading" />
      </div>
    )
  }
export default Spinner;
