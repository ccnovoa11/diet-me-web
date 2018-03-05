import React, { Component } from "react";

export class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      weight: ""
    };
  }
  handdleChange(event) {
    this.setState({ weight: event.target.value });
  }

  submitForm(event){
    event.preventDefautl();
    
    fetch("/pacients/elpeso",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "token": localStorage.getItem("token")
      },
      body:JSON.stringify({
        weight:this.state.weight,
        idPac: localStorage.getItem("idPacient")
      })
    }).then(res=>res.json()).then(myJson=>{
      console.log(myJson, "que me pasa");
      console.log(this.state.weight);
      this.setState();
    });
  }
  render() {
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
                  value={this.props.user.name} />
              </div>
              <div className="col-sm-6">
                <label>Age</label>
                <input className="textInfo" type="text" name="age" value={this.props.user.age} disabled="disabled" />
              </div>
              <div className="col-sm-6">
                <label>Sex</label>
                <input className="textInfo" type="text" name="sex" value={this.props.user.sex} disabled="disabled" />
              </div>
              <div className="col-sm-6">
                <label>PhoneNumber</label>
                <input className="textInfo" type="text" name="p-number" value={this.props.user.phoneNumber} disabled="disabled" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <label>Weight</label>
                  
                  <input className="textInfo" 
                    type="text" 
                    name="weight" 
                    value={this.props.user.weight}
                    onChange={this.handdleChange.bind(this)} />
                
                </div>
                <div className="col-sm-6">
                  <label>Height</label>
                  <input className="textInfo" type="text" name="height" value={this.props.user.height} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>bmi</label>
                  <input className="textInfo" type="text" name="bmi" value={this.props.user.bmi} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label >Why you want to loose?</label>
                  <input className="textInfo" type="text" name="wlose" value={this.props.user.whyLose} disabled="disabled" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label>Life Style</label>
                  <input className="textInfo" type="text" name="lifeStyle" value={this.props.user.lifeStyle} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Sport</label>
                  <input className="textInfo" type="text" name="sport" value={this.props.user.sport} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Intensity</label>
                  <input className="textInfo" type="text" name="intensity" value={this.props.user.intensity} disabled="disabled" />
                </div>
                <div className="col-sm-6">
                  <label>Diet Type</label>
                  <input className="textInfo" type="text" name="dietType" value={this.props.user.dietType} disabled="disabled" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
}