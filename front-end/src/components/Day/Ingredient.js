import React, {Component} from "react";

export class Ingredient extends Component{

  render()
  {
    return(
      <div>
        <p>Name: {this.props.ingredient.name}</p>
        <p>Carbs: {this.props.ingredient.carbs}</p>
        <p>Fats: {this.props.ingredient.fats}</p>
        <p>Protein: {this.props.ingredient.protein}</p>
        <p>Calories: {this.props.ingredient.calories}</p>
      </div>
    );
  }
}