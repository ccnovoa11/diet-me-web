import React, {Component} from "react";
export class Ingredient extends Component{
	render(){
		return(
			<a href="#" className="list-group-item list-group-item-action">{this.props.productName}</a>
		)
	}
}