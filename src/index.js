import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// normal reloading
if (module.hot) {
	module.hot.accept("./App", () => {
		const NextApp = require("./App").default;
		ReactDOM.render(<NextApp />, document.getElementById("root"));
	});
}

serviceWorker.unregister();
