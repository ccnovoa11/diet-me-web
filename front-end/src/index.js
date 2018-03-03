import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
	<BrowserRouter >
		<AppRoutes />
	</BrowserRouter>, 
	document.getElementById("root"));
registerServiceWorker();
