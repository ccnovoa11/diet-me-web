import React, {Component} from "react";
import {Pagination} from "react-bootstrap";

export class Pag extends Component{
	render(){
		let active = this.props.active;
		let items =[];
		let offset = this.props.offset;
		for(let i = offset; i < offset; i++)
		{
			items.push(<Pagination.Item active={i === active}>{i}</Pagination.Item>);
		}
		return(
			<div>
				<Pagination bsSize="medium">{items}</Pagination>
			</div>
		)
	}
}