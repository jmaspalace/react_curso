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
		],
		showPersons : false
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


	togglePersonsHandler = (event) => {

		const doesShow = this.state.showPersons;
		this.setState ({
			showPersons : !doesShow
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
			<div className="App"> 
				Hello world!!! 
				<br /><br />
				<button
					style={style} 
					onClick={this.togglePersonsHandler}>
					Switch Name
				</button>
				
				{ this.state.showPersons ? 

					<div>
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
				: 

				<Person ></Person>

				 }

			</div>
		);//End Return
	}//End Render
}
  
export default App;


/*
<Person 
	name={this.state.persons[0].name} 
	age={this.state.persons[0].age}
	click={this.switchNameHandler} >
*/