import React, { Component } from "react";
import { MenuItem } from "./MenuItem";

export class Day extends Component {

  componentWillMount() {
    this.setState({
      menus: []
    });
  }

  getMenus() {
    var token = localStorage.getItem("token");
    var idUser = "5a9b0bc7306f9c200c903ce0";
    console.log(token);
    console.log(idUser);
    fetch("/menus/menusPac", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify({ idPacient: idUser })
    }).then(res => res.json())
      .then(p => { this.setState({ menus: p.menus }); });

  }

  componentDidMount() {
    this.getMenus();
  }

  selectMenu(menuId){
    var token = localStorage.getItem("token");
    var idUser = "5a9b0bc7306f9c200c903ce0";
    fetch("/pacients/addMenu", {
      method: "POST",
      headers: {
		  "Content-Type": "application/json",
		  "token": token
      },
      body: JSON.stringify({ idMenu: menuId, idDay:"5a9c08a0a998c33ed48b5f4b" })
	  });
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    				Select Menus
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.menus.map((d,index) => {
              return <MenuItem name={d.name} idMenu={d._id} key={index} onClick={this.selectMenu}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}