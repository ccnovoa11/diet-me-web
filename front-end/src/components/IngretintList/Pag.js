import React, {Component} from "react";
import Pagination from "react-js-pagination";


export class Pag extends Component{
	 
	handlePageChange(pageNumber) {
		console.log(`active page is ${pageNumber}`);
		this.setState({activePage: pageNumber});
	  }
	  render() {
		return (
			<Pagination
				activePage={1}
				itemsCountPerPage={5}
				totalItemsCount={5}
				onChange={this.handlePageChange}
		  />
		);
	  }
}