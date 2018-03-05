import React, {Component} from "react";
import {IngredientList} from "../IngretintList/IngredientList";
import {NutrientInfo} from "./NutrientInfo";
import axios from "axios";

export class CreateMenu extends Component{

  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.state={
      nutrients: []
    };
  }

  search(ndbno){
    axios.get("https://api.nal.usda.gov/ndb/reports/?ndbno="+ ndbno +"&type=f&format=json&api_key=MiebBLSFP8atDWTErUxcuEIcv9gysOAkm9uHBaBP")
      .then(response => {
        var arr = response.data.report.food.nutrients.filter( el => {
          if(el.nutrient_id === "208" || el.nutrient_id === "203" || el.nutrient_id === "204" || el.nutrient_id === "205"){
            return true;
          }
          else{
            return false;
          }
        });
        this.setState({
          nutrients: arr
        });
      }).catch(function (error) {
        console.log(error);
      });
  }

  render(){
    console.log(this.state);
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>Search An Ingredient!</h4>
            <IngredientList search={this.search}/>
          </div>
          <div className="col-sm-6">
            {this.state.nutrients.map((d, index) => {
              return <NutrientInfo name={d.name} value={d.value} unit={d.unit} key={index}/>;
            })}
            {this.state.nutrients.length >0 ? <button type="button" className="btn btn-primary btn-sm">Add to Menu</button> : <div> </div>}
          </div>
        </div>
      </div>
    );
  }
}