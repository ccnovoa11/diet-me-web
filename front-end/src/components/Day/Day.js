import React, { Component } from "react";
import { MenuItem } from "./MenuItem";

export class Day extends Component {

	constructor(props){
		super(props);
		this.selectMenu = this.selectMenu.bind(this);
	}

	componentWillMount() {
		this.setState({
			menus: []
		});
	}

	getMenus() {
		fetch("/menus/menusPac",{
			method: "POST",
			headers:{
				"Content-Type": "application/json",
				token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMTc0ODcwLCJleHAiOjE1MjAxNzg0NzB9.3Jr4xF7tuJVXrbpQB0vMtKcFrQJzSYIIQYbxz-R9qr4"
			},
			body: JSON.stringify({idPacient: "5a9b0bc7306f9c200c903ce0"})
		}).then(res => res.json())
			.then( p => {this.setState({ menus: p.menus});});
	}

	componentDidMount() {
		this.getMenus();
	}

	selectMenu(){
		
	}

	render() {
		return (
			<div>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    				Select Menus
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{this.state.menus.map((d,index) => {
							return <MenuItem name={d.name} key={index} onClick={this.selectMenu}/>;
						})}
					</div>
				</div>
			</div>
		);
	}
}