import React, {Component} from "react";

export class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			pacient:{},
			pacientId: 1
		};
	}
	
	getPacient(){
		fetch("/pacients/"+this.state.pacientId).then( res =>
			this.setState({ pacient: res}));
	}


	render(){
		return(
			<h1></h1>
		);
	}
}