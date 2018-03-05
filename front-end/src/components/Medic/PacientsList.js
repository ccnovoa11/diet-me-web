import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

export class PacientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pacients: []
    };

  }



  componentDidMount() {
    let me = this;
    fetch("/users/" + localStorage.getItem("idUser")).then(res => {
      return res.json();
    }).then(myJson => {
      console.log(myJson, "there goes my json");
      localStorage.setItem("idMedic", myJson.idMedic);
      console.log(localStorage.getItem("idMedic"));
      var token = localStorage.getItem("token");
      var idMedic = localStorage.getItem("idMedic");
      fetch("/medics/lista", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        body: JSON.stringify({ medicId: idMedic })
      }).then(res => res.json())
        .then(p => {
          me.setState({ pacients: p.pacients });
          console.log(this.state.pacients, "sigo en mount");
        });
    });
  }
  onNavegateDetail(){
    BrowserRouter.push("/pacient");
  }
  
  render() {
    console.log(this.state.pacients, "hpta");
    return (
      <div>
        <h1>My Pacients</h1>
        <div>
          {this.state.pacients.map(
            (f) => {
              console.log(f.name, "que soy");
              return (
                <div>
                  <ul>
                    <li><b>Name: </b>{f.name} <b>Age:</b>{f.age}
                      <button type="submit" onClick={this.onNavegateDetail}> View Detail</button></li>
                  </ul>
                </div>

              );
            }
          )
          }
        </div>
      </div>
    );

  }
}