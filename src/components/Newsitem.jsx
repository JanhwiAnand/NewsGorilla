// import React, { Component } from 'react'
import React from "react";
// export default class Newsitem extends Component {
  // render() {
  const Newsitem=(props)=>{
    let {title,description,imgurl,newscontinue}=props//changed this.props to props
    return (
      <div className='container'>
        <div className="card" style={{width:'18rem'}} >
  <img src={imgurl} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newscontinue} className="btn btn-primary" target='_blank'>Read More</a>
  </div>
</div>
      </div>
    )
  }
export default Newsitem;
//easily converted to fnction based, just send props and instead of this.props just use props