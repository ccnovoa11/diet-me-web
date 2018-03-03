import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Header extends Component{
	
	render(){
		return(
			<ul className="nav nav-pills">
				<li className="nav-item">
					<Link to="/" className="nav-link">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/search" className="nav-link">Search Food</Link>
				</li>
			</ul>
		);
	}
}