import React, {Component} from "react";
import {IngredientList} from "../IngretintList/IngredientList";
import {NutrientInfo} from "./NutrientInfo";
import axios from "axios";

export class CreateMenu extends Component{

  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.addToMenu = this.addToMenu.bind(this);
    this.menuName = this.menuName.bind(this);
    this.addMenu = this.addMenu.bind(this);
    this.state={
      nutrients: [],
      ingredientName: "",
      itemList: [],
      menuName: ""
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
          nutrients: arr,
          ingredientName: response.data.report.food.name
        });
      }).catch(function (error) {
        console.log(error);
      });
  }

  addToMenu(){
    var arr = this.state.itemList;
    var temp = {};
    temp.name = this.state.ingredientName;
    var carbs = "";
    var fats = "";
    var protein = "";
    var calories = "";
    for(let i of this.state.nutrients){
      if(i.nutrient_id === "208"){
        calories = i.value;
      }
      else if(i.nutrient_id === "203"){
        protein = i.value;
      }
      else if(i.nutrient_id === "204"){
        fats = i.value;
      }
      else if(i.nutrient_id === "205"){
        carbs = i.value;
      }
    }
    temp.carbs = carbs;
    temp.fats = fats;
    temp.protein = protein;
    temp.calories = calories;
    arr.push(temp);
    this.setState({
      itemList: arr
    });
  }

  menuName(e){
    const name = e.target.value;
    this.setState({
      menuName: name
    });
  }

  addMenu(){
    fetch("/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvN0BqdWFuLmNvbSIsInVzZXJpZCI6IjVhOWIwYmM3MzA2ZjljMjAwYzkwM2NkZiIsIm1lZGljIjpmYWxzZSwiaWF0IjoxNTIwMjIwMjQ0LCJleHAiOjE1MjAyMjM4NDR9.dVIl9eT9q-QvEv-7_wGJPHBBS8nXOky1eVCeXCO2YQ8"
      },
      body: JSON.stringify({ food: this.state.itemList, name: this.state.menuName, pacientId: "5a9b0bc7306f9c200c903ce0" })

    })
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
            {this.state.nutrients.length >0 ? <button type="button" className="btn btn-primary btn-sm" onClick={this.addToMenu}>Add to Menu</button> : <div> </div>}
            {this.state.itemList.length >0 ? <div>Menu name: <input type="text" onChange={this.menuName}/></div> : <div> </div>}
            {this.state.itemList.length >0 ? <button type="button" className="btn btn-primary btn-sm" onClick={this.addMenu}>Add Menu</button> : <div> </div>}
          </div>
        </div>
      </div>
    );
  }
}