import React, {Component} from "react";

export class DetailButton extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.searcPacient(this.props.pacientId);
  }

  render(){
    return(
      <button className="buttonLog"type = "submit" onClick={this.handleClick}>Detail</button>
    );
  }
}