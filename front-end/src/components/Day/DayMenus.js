import React, {Component} from "react";
import {Ingredient} from "./Ingredient";

export class DayMenus extends Component{

  render(){
    return(
      <div>
        <div>
          <h5>Name: {this.props.menus.name}</h5>
          <h5>Total Calories: {this.props.menus.caloriesTot}</h5>
          <h5>Total Carbs: {this.props.menus.carbsTot}</h5>
          <h5>Total fats: {this.props.menus.fatsTot}</h5>
          <h5>Total Protein: {this.props.menus.protein}</h5>
        </div>
        <div className="row">
          {this.props.menus.food.map( (d, index) => {
            return(
              <div key={index+1000} className="col-sm-4">
                <h5 key={index-1000}>Ingredient</h5>
                <Ingredient ingredient={d} key={index}/>
              </div>);})}
        </div>
      </div>
    );
  }
}