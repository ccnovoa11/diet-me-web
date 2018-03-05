import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export class PacientsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pacients: [],
      currentId: "",
      selectedPacient: false
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

  searchPacient(idPacient){
    var token = localStorage.getItem("token");
    localStorage.setItem("idPacient", idPacient);
  }


  render() {
    console.log(this.state.pacients, "hpta");
    return (
      <div>
        <h1 className="tittle">My Pacients</h1>
        <div>
          {this.state.pacients.map(
            (f) => {
              return (

                <div className="row intro ">
                  <div className="col-sm-2">
                    <label>Name</label>
                    <input type="text" value={f.name} disabled />
                  </div>
                
                  <div className="col-sm-2">
                    <label>Age</label>
                    <input type="text" value={f.age} disabled />
                  </div>
                  <div className="col-sm-2">
                    <label>Weight</label>
                    <input type="text" value={f.weight} disabled />
                  </div>
                  <div className="col-sm-2">
                    <label>Height</label>
                    <input type="text" value={f.height} disabled />
                  </div>
                  <div className="col-sm-2 button-log">
                    <button className="buttonLog" type ="submit" pacientId={f._id} onClick={this.searchPacient}>Detail</button>
                  </div>
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