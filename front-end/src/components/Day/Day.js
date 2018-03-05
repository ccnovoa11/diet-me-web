import React, { Component } from "react";
import { MenuItem } from "./MenuItem";
import { NewDay } from "./NewDay";
import { DayMenus } from "./DayMenus";

export class Day extends Component {

  constructor(props) {
    super(props);
    this.createNewDay = this.createNewDay.bind(this);
    this.getMenus = this.getMenus.bind(this);
    this.selectMenu = this.selectMenu.bind(this);
  }

  componentWillMount() {
    this.setState({
      menus: [],
      selectedMenus: [],
      idPac: "",
      tokenPac: "",
      idDay: ""
    });
  }

  getMenus() {

    fetch("/users/" + localStorage.getItem("idUser")).then(res => {
      return res.json();
    }).then(myJson => {
      console.log(myJson, "quien soy?");
      localStorage.setItem("idPacient", myJson.idPacient);
      console.log(localStorage.getItem("idPacient"));

      var token = localStorage.getItem("token");
      var idPac = localStorage.getItem("idPacient");
      fetch("/menus/menusPac", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        body: JSON.stringify({ idPacient: idPac })

      }).then(res => res.json())
        .then(p => { console.log(p); this.setState({ menus: p.menus }); });
    });
  }

  componentDidMount() {
    this.getMenus();
  }

  selectMenu(menuId) {
    var token = localStorage.getItem("token");
    var idPac = localStorage.getItem("pacientId");
    fetch("/pacients/addMenu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify({ idMenu: menuId, idDay: this.state.idDay })
    }).then(res => res.json())
      .then(p => {
        console.log(p.menu);
        let arr = this.state.selectedMenus;
        arr.push(p.menu);
        this.setState({ selectedMenus: arr });
      });
  }

  createNewDay() {
    var token = localStorage.getItem("token");
    var idPac = localStorage.getItem("pacientId");
    fetch("/pacients/createDay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify({ idPacient: idPac, dayCalories: 1500 })
    }).then(res => res.json())
      .then(p => this.setState({ idDay: p.day._id }));
  }

  render() {
    console.log(this.state.selectedMenus);
    return (

      <div className="container">
        <div>
          <h1 className="tittle">
            The days of your life...
           </h1>
        </div>
        <div className="row">
          <button type="button" className="btn-day" onClick={this.createNewDay}>New Day</button>
        </div>
        <div className="row">
          <div className="dropdown">
            <button className=" dropbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select Menus
            </button>
            <div className="dropdown-content" aria-labelledby="dropdownMenuButton">

              {this.state.menus.map((d, index) => {
                return <MenuItem name={d.name} menu={d} key={index} onClick={this.selectMenu} />;
              })}
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.selectedMenus.map((d, index) => {
            return <DayMenus menus={d} key={index} />;
          })}
        </div>
      </div>
    );
  }
}