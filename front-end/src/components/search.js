import React, {Component} from "react";


export class Search extends Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const name = e.target.value;
		if(e.which === 13)
		{
			this.props.onKeyPress(name);
		}
	}

	render(){
		return(
			<input type="input" onKeyPress={this.handleChange}/>
		)
	}
}