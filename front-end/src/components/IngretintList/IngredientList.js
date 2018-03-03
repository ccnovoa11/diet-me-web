import React, { Component } from "react";
import axios from "axios";
import { Search } from "./search";
import { Ingredient } from "./Ingredient";
import { Pag } from "./Pag";

class IngredientList extends Component {
	constructor(props) {
		super(props);
		this.getItemByname = this.getItemByName.bind(this);
		this.changeSearchName = this.changeSearchName.bind(this);
	}

	componentWillMount() {
		this.setState({
			items: [],
			searchName: "",
			currentPage: 1,
			offset: 0
		});
	}

	changeSearchName(newSearchName) {
		this.setState({
			searchName: newSearchName
		}, () => {
			this.getItemByName();
		});
	}

	getItemByName() {
		const url = "https://api.nal.usda.gov/ndb/search/?format=json&sort=n&max=10&offset=0&api_key=MiebBLSFP8atDWTErUxcuEIcv9gysOAkm9uHBaBP&q=" + this.state.searchName;
		axios.get(url).then(response => {
			let arr = [];
			for (let o of response.data.list.item) {
				let objTemp = {};
				objTemp.name = o.name;
				objTemp.ndbno = o.ndbno;
				arr.push(objTemp);
			}
			console.log(arr);
			this.setState({
				items: arr
			});
		}).catch(function (error) {
			console.log(error);
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<Search onKeyPress={this.changeSearchName} />
				<ul className="list-group">
					{this.state.items.map((d, index) => {
						return <Ingredient productName={d.name} key={index} />
					})}
				</ul>
				<Pag active={this.state.currentPage} offset={this.state.offset}/>
			</div>
		);
	}
}

export default IngredientList;
