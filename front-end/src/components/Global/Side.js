import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Side extends Component{
	
  render(){
    return(
      <div className="sidenav">
        <Link to="/info">Info</Link>
        <Link to="/day">Day</Link>
        <Link to="/createMenu">Create Menu</Link>
        <Link to="/search">Contact</Link>
      </div>
    );
  }
}