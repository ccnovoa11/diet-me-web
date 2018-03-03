import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import IngredientList from "./components/IngredientList";
import {Header} from "./components/Header";
import registerServiceWorker from "./registerServiceWorker";

class App extends React.Component{

	state = {users: []};

	componentDidMount() {
		fetch('medics/a')
		  .then(res => res.json())
		  .then(users => this.setState({ users }));
	  }

	render(){
		console.log(this.state);
		return(
			<div className="container">
				<div className="row">
					<Header />
				</div>
				<div className="row">
					<IngredientList />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
