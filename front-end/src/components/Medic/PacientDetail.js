import React from "react";

export class PacientDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pacient: {}
    };
  }


  getPacient() {
    var token = localStorage.getItem("token");
    var idPac = localStorage.getItem("idPacient");
    console.log(idPac);
    fetch("/pacients/"+idPac, {
      headers: {
        "token": token 
      }
    })
      .then(res => res.json())
      .then(p => this.setState({ pacient: p.pacient }));
  }

  componentDidMount(){
    this.getPacient();
  }

  render() {
    console.log(this.state);
    return (

      <div>
        <form>
          <div className="container">
            <div>
              <button type="submit">Edit Weight</button>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label>Name</label>
                <input className="textInfo" type="text" name="name"
                  value={this.state.pacient.name} />
              </div>
              <div className="col-sm-6">
                <label>Age</label>
                <input className="textInfo" type="text" name="age" value={this.state.pacient.age} disabled="disabled" />
              </div>
              <div className="col-sm-6">
                <label>Sex</label>
                <input className="textInfo" type="text" name="sex" value={this.state.pacient.sex} disabled="disabled" />
              </div>
              <div className="col-sm-6">
                <label>PhoneNumber</label>
                <input className="textInfo" type="text" name="p-number" value={this.state.pacient.phoneNumber} disabled="disabled" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <label>Weight</label>

                  <input className="textInfo"
                    type="text"
                    name="weight"
                    value={this.state.pacient.weight}/>

                </div>
                <div className="col-sm-6">
                  <label>Height</label>
                  <input className="textInfo" type="text" name="height" value={this.state.pacient.height} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>bmi</label>
                  <input className="textInfo" type="text" name="bmi" value={this.state.pacient.bmi} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label >Why you want to loose?</label>
                  <input className="textInfo" type="text" name="wlose" value={this.state.pacient.whyLose} disabled="disabled" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label>Life Style</label>
                  <input className="textInfo" type="text" name="lifeStyle" value={this.state.pacient.lifeStyle} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Sport</label>
                  <input className="textInfo" type="text" name="sport" value={this.state.pacient.sport} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Intensity</label>
                  <input className="textInfo" type="text" name="intensity" value={this.state.pacient.intensity} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Diet Type</label>
                  <input className="textInfo" type="text" name="dietType" value={this.state.pacient.dietType} disabled="disabled" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    );
  }

}