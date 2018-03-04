import React, {Component} from "react";
import {Side} from "./Global/Side";
import {Header} from "./Global/Header";

export class App extends Component{

	render(){
		return(
			<div>
				<div>
					<Side/>
				</div>
				<div className="main">
					<Header/>
				</div>
				<div className="main">
					{this.props.children}
				</div>
			</div>
		)
	}
}