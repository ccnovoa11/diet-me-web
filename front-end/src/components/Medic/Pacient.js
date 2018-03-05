import React from "react";

export class Pacient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      addres: "123",
      age: "",
      sex: "",
      phoneNumber: "",
      weight: "",
      height: "",
      bmi: "",
      whyLose: "",
      lifeStyle: "",
      sport: "",
      intensity: "",
      muchTime: "",
      dietType: "",
      allowedCalories: "",
      email: "",
      password: ""
    };
  }

  handleemailChanged(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  handleNameChanged(event) {
    this.setState({ name: event.target.value });
  }
  handleAgeChanged(event) {
    this.setState({ age: event.target.value });
  }
  handleSexChanged(event) {
    this.setState({ sex: event.target.value });
  }

  handlePhoneChanged(event) {
    this.setState({ phoneNumber: event.target.value });
  }
  handleWeightChanged(e) {
    this.setState({ weight: e.target.value });
  }
  handleHeightChanged(e) {
    this.setState({ height: e.target.value });
  }
  handleBMIChanged(e) {
    this.setState({ bmi: e.target.value });
  }
  handleWhyChanged(e) {
    this.setState({ whyLose: e.target.value });
  }
  handleLifeStyle(e) {
    this.setState({ lifeStyle: e.target.value });
  }
  handleSportChange(e) {
    this.setState({ sport: e.target.value });
    console.log(this.state.sport);
  }
  handleIntensityChanged(e) {
    this.setState({ intensity: e.target.value });
  }
  handleMuchTimeChanged(e) {
    this.setState({ muchTime: e.target.value });
    console.log(this.state.muchTime);
  }
  handleDietType(e) {
    this.setState({ dietType: e.target.value });
  }
  handleAllowedCalories(e) {
    this.setState({ allowedCalories: e.target.value });
  }

  formSubmit(event) {

    event.preventDefault();
    console.log(this.state);
      
    fetch("/medics/createPacient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        email: this.state.email, password: this.state.password, addres: this.state.addres,
        name: this.state.name, age: this.state.age, sex: this.state.sex,
        phoneNumber: this.state.phoneNumber, weight: this.state.weight,
        height: this.state.height, bmi: this.state.bmi, whyLose: this.state.whyLose,
        lifeStyle: this.state.lifeStyle, sport: this.state.sport, intensity: this.state.intensity,
        muchTime: this.state.muchTime, dietType: this.state.dietType, allowedCalories: this.state.allowedCalories,
        idMedic: localStorage.getItem("idMedic")
      })
    }).then(res => res.json()).then(myJson => {
      console.log(myJson);
    }).catch(err => {
      console.log(err);
    });

  }



  render() {
    return (
      <div>
        <div>
          <h1 className="tittle">
            Create New Pacient
          </h1>
        </div>
        <form onSubmit={this.formSubmit.bind(this)} >
          <div className="container intro">
            <div className="row">
              <div className="col-sm-6">
                <label for="email"><b>Email</b></label><br />
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleemailChanged.bind(this)}
                  required /><br />
              </div>

              <div className="col-sm-6">
                <label for="password"><b>Password</b></label><br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  value={this.state.password}
                  onChange={this.handlePasswordChanged.bind(this)}
                  required /> <br />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label for="name"><b>Name</b></label><br />
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleNameChanged.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="age"><b>Age</b></label><br />
                <input
                  type="number"
                  placeholder="Enter age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleAgeChanged.bind(this)}
                  required /><br />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label for="sex"><b>Sex</b></label><br />
                <input
                  type="text"
                  placeholder="Enter sex"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.handleSexChanged.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="number"><b>Phone Number</b></label><br />
                <input
                  type="number"
                  placeholder="Enter phone"
                  name="phone"
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneChanged.bind(this)}
                  required /><br />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label for="weight"><b>Weight</b></label><br />
                <input
                  type="number"
                  placeholder="Enter weight"
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleWeightChanged.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="height"><b>Height</b></label><br />
                <input
                  type="number"
                  placeholder="Enter height"
                  name="height"
                  value={this.state.height}
                  onChange={this.handleHeightChanged.bind(this)}
                  required /><br />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label for="bmi"><b>bmi</b></label><br />
                <input
                  type="number"
                  placeholder="Enter bmi"
                  name="bmi"
                  value={this.state.bmi}
                  onChange={this.handleBMIChanged.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="whyLose"><b>Why Lose</b></label><br />
                <input
                  type="text"
                  placeholder="Enter whyLose"
                  name="whyLose"
                  value={this.state.whyLose}
                  onChange={this.handleWhyChanged.bind(this)}
                  required /><br />
              </div>
            </div>


            <div className="row">
              <div className="col-sm-6">
                <label for="lifeStyle"><b>Life Style</b></label><br />
                <input
                  type="text"
                  placeholder="Enter lifeStyle"
                  name="lifeStyle"
                  value={this.state.lifeStyle}
                  onChange={this.handleLifeStyle.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="sport"><b>Sport</b></label><br />
                <select onChange={this.handleSportChange.bind(this)}>
                  <option value="true">Yes!</option>
                  <option value="false">No</option>

                </select><br />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <label for="intensity"><b>Intensity</b></label><br />
                <input
                  type="text"
                  placeholder="Enter intensity"
                  name="intensity"
                  value={this.state.intensity}
                  onChange={this.handleIntensityChanged.bind(this)}
                  required /><br />
              </div>
              <div className="col-sm-6">
                <label for="muchTime"><b>Much Time</b></label><br />

                <select onChange={this.handleMuchTimeChanged.bind(this)}>
                  <option value="1 Time a Week">1 Time a Week</option>
                  <option value="2 Times a Week">2 Times a Week</option>
                  <option value="3 Time a Week">3 Times a Week</option>
                  <option value="More Than 3 Times a Week">More Than 3 Times a Week</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
              <label for="dietType"><b>Diet Type</b></label><br />
            <input
              type="text"
              placeholder="Enter dietType"
              name="dietType"
              value={this.state.dietType}
              onChange={this.handleDietType.bind(this)}
              required /><br />
            
              </div>
              <div className="col-sm-6">
              <label for="allowedCalories"><b>Allowed Calories</b></label><br />
              <input
              type="number"
              placeholder="Enter allowedCalories"
              name="allowedCalories"
              value={this.state.allowedCalories}
              onChange={this.handleAllowedCalories.bind(this)}
              required /><br />
              </div>
            </div>
            <button className="buttonLog"type="submit">Submit!</button>
          </div>
        </form>
      </div>

    );
  }
}