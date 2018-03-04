import React, { Component } from "react";
import { MenuItem } from "./MenuItem";

export class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }

  getMenus() {
    fetch("/menusPac", {
      method: "POST",
      body: { idPacient: this.props.id }
    }).then(res => res.json())
      .then(p => this.setState({ menus: p.menus }));
  }

  componentDidMount() {
    this.getMenus();
  }

  render() {
    return (
      <div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Add Menu
					</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.state.menus.map((d, index) => {
              return <MenuItem name={d.name} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}