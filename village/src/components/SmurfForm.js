import React from 'react';

const SmurfForm = (props) => {
	return (
		<div className="SmurfForm">
			<form>
				<input onChange={props.handleInputChange} placeholder="name" value={props.smurf.name} name="name" />
				<input onChange={props.handleInputChange} placeholder="age" value={props.smurf.age} name="age" />
				<input
					onChange={props.handleInputChange}
					placeholder="height"
					value={props.smurf.height}
					name="height"
				/>
				<button onClick={props.addSmurf}>Add to the village</button>
			</form>
		</div>
	);
};

export default SmurfForm;
