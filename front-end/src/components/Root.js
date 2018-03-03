import React, {Component} from "react";
import {Header} from "./Header";

export class Root extends Component{

	render(){
		return(
			<div className="container">
				<div className="row">
					<Header />
				</div>
				<div className="row">
					{this.props.children}
				</div>
			</div>
		)
	}
}