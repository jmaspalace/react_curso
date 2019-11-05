import React from 'react'
import './Person.css';

const style = {
			backgorundColor : 'white',
			font: 'inherit',
			border : '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click }>I'm {props.name}, and I'm {props.age} years old {props.children}</p>
			<input type="text" onChange={props.changed} value ={props.name} style={style}/>
		</div>
		)
};

export default person;