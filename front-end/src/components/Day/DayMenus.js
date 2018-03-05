import React, {Component} from "react";
import {Ingredient} from "./Ingredient";

export class DayMenus extends Component{

  render(){
    return(
      <div className="MenuBorder">
        <div>
          <div className="row intro2">
            <div className="col-sm-6">
              <h5><b>Name:</b>{this.props.menus.name}</h5>
            </div>
            <div className="col-sm-6">
              <h5 ><b>Total Calories:</b>{this.props.menus.caloriesTot}</h5>
            </div>
          </div>
          <div className="row intro2">
            <div className="col-sm-6">
              <h5 className="carbs"><b>Total Carbs:</b> {this.props.menus.carbsTot}</h5>
            </div>
            <div className="col-sm-6">
              <h5><b>Total fats:</b> {this.props.menus.fatsTot}</h5>
            </div>
          </div>
          <div className="row intro2">
            <h5><b>Total Protein:</b> {this.props.menus.protein}</h5>
          </div>
        </div>

        <div className="row intro2">
          {this.props.menus.food.map( (d, index) => {
            return(
              <div key={index+1000} className="col-sm-6">
                <h5 key={index-1000}>Ingredient</h5>
                <Ingredient ingredient={d} key={index}/>
              </div>);})}
        </div>
      </div>
    );
  }
}