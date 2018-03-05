import React, {Component} from "react";
export class Ingredient extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick(this.props.ndbno);
  }

  render(){
    return(
      <button type="button" className="list-group-item list-group-item-action" onClick={this.handleClick}>{this.props.productName}</button>
    );
  }
}