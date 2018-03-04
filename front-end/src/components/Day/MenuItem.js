import React, {Component} from "react";

export class MenuItem extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.onClick(this.props.idMenu);
  }

  render(){
    return(
      <a className="dropdown-item" onClick={this.handleClick}>{this.props.name}</a>
    );
  }
}