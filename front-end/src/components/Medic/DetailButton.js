import React, {Component} from "react";

export class DetailButton extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.pacientId);
    this.props.onClick(this.props.pacientId);
  }

  render(){
    console.log("aaaaaaaaaaaaaaaaaaaa");
    return(
      <button className="buttonLog" onClick={this.handleClick}>Detail</button>
    );
  }
}