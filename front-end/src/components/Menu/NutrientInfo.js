import React, {Component} from "react";

export class NutrientInfo extends Component{

  render(){
    return(
      <div>
        <p>{this.props.name}: {this.props.value} {this.props.unit}</p>
      </div>
    );
  }
}