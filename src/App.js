/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>que pedosd</h2>
    </div>
  );
}*/

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		persons : [
			{name: 'Diego', age : 31 },
			{name: 'Masito', age : 3 }
		],
		persons2 : [
			{name: 'Diego3', age : 31 }
		]
	}

	switchNameHandler = (newName) => {
		//console.log("aaaaperrrrrroooo");
		this.setState ({
			persons : [
				{name: newName	 , age : 31 },
				{name: 'Masito', age : 3.5 }
			]
		})

	}

	nameChangedHandler = (event) => {
		this.setState ({
			persons : [
				{name: "Diego"	 , age : 31 },
				{name: event.target.value, age : 3.5 }
			]
		})

	}

	render(){

		const style = {
			backgorundColor : 'white',
			font: 'inherit',
			border : '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		return (
			<div className="App"> Hello world!!! 
			<br /><br />

			<button
				style={style} 
				onClick={this.switchNameHandler.bind(this, 'Lia')}>
				Switch Name
			</button>
				<Person 
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age}
					click={this.switchNameHandler.bind(this, 'Lia!!')} >
 
				</Person>
				<Person 
					name={this.state.persons[1].name} 
					age={this.state.persons[1].age}  
					changed={this.nameChangedHandler}
					> 
				</Person>
				<Person 
					name={this.state.persons2[0].name} 
					age={this.state.persons2[0].age}  
					changed={this.nameChangedHandler}
					> 
				</Person>


			</div>
		);
	}
}
  
export default App;


/*
<Person 
	name={this.state.persons[0].name} 
	age={this.state.persons[0].age}
	click={this.switchNameHandler} >
*/