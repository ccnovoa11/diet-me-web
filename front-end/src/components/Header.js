import React, {Component} from "react";

export class Header extends Component{

	render(){
		return(
			<nav className="nav nav-pills">
				<a className="nav-item nav-link active" href="#">Home</a>
				<a className="nav-item nav-link" href="#">Search Food</a>
				<a className="nav-item nav-link" href="#">Link</a>
			</nav>
		)
	}
}