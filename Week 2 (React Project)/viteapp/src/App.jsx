import React from "react";
import { collegeName, studentName } from "./constant";

// Class based
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hi Lorenz!</h1>
				{ studentName } studies in { collegeName }  
			</div>
		)
	} 
}

export class MyClass extends React.Component {
	render() {
		return (
			<div>
				Another class
			</div>
		)
	}
}

export default App;

// Function based