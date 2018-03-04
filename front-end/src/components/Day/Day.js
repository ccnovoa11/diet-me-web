import React, { Component } from "react";
import { MenuItem } from "./MenuItem";
import axios from "axios";
import superagent from "superagent";

export class Day extends Component {

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
				token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMTM2MDMyLCJleHAiOjE1MjAxMzk2MzJ9.-eru89MWH47jYhU72z0NIj-CNk2JYJpgiipQ93q8DdQ"
			},
			body: JSON.stringify({idPacient: "5a9b0bc7306f9c200c903ce0"})
		}).then(res => res.json())
			.then( p => {this.setState({ menus: p.menus});});
		/*console.log("Que dicen los jijueputas");
		superagent.post("/menus/menusPac").set("Content-Type", "application/json").set("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMTM2MDMyLCJleHAiOjE1MjAxMzk2MzJ9.-eru89MWH47jYhU72z0NIj-CNk2JYJpgiipQ93q8DdQ").send({idPacient: "5a9b0bc7306f9c200c903cdf"}).then(res =>{
			console.log(res.body);
		});*/

	}

	componentDidMount() {
		this.getMenus();
	}

	render() {
		console.log(this.state.menus);
		return (
			<div>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add Menu
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{this.state.menus.map((d, index) => {
							return <MenuItem name={d.name} key={index} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}