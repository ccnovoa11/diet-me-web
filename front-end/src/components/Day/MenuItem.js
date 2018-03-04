import React, {Component} from "react";

export class MenuItem extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		const name = e.target.innerHTML;
		console.log(name);
		this.props.onClick(name);
	}

	render(){
		return(
			<a className="dropdown-item" onClick={this.handleClick}>{this.props.name}</a>
		);
	}
}