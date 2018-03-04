import React, { Component } from "react";

export class PersonalInfo extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <label>Name</label>
            <input className="textInfo" type="text" name="name" value={this.props.user.name}/>
          </div>
          <div className="col-sm-6">
            <label>Age</label>
            <input className="textInfo" type="text" name="age" value={this.props.user.age}/>
          </div>
          <div className="col-sm-6">
            <label>Sex</label>
            <input className="textInfo" type="text" name="sex" value={this.props.user.sex}/>
          </div>
          <div className="col-sm-6">
            <label>PhoneNumber</label>
            <input className="textInfo" type="text" name="p-number" value={this.props.user.phoneNumber}/>
          </div>
        </div>
      </div>
    );
  }
}