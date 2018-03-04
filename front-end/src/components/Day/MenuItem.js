import React, {Component} from "react";

export class MenuItem extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<a class="dropdown-item">{this.props.name}</a>
		);
	}
}