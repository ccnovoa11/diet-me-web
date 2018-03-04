import React, {Component} from "react";

export class PersonalInfo extends Component{

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<p>Name: {this.props.user.name}</p>
					</div>
					<div className="col-sm-3">
						<p>Age: {this.props.user.age}</p>
					</div>
					<div className="col-sm-3">
						<p>Sex: {this.props.user.sex}</p>
					</div>
					<div className="col-sm-3">
						<p>PhoneNumber: {this.props.user.phoneNumber}</p>
					</div>
				</div>
			</div>
		);
	}
}