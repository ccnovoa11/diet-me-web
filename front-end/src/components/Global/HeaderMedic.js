import React, { Component } from "react";
export class HeaderMedic extends Component {

  render() {
    return (
      <div id="head">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-2">
            <h4>{this.props.userName}</h4>
          </div>
        </div>
      </div>
    );
  }
}