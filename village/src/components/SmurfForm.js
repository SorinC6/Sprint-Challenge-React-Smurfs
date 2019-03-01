import React from 'react';
import styled from 'styled-components';

const FromWrapper = styled.div`
	display: flex;
	width: 400px;
	margin: 0 auto;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 60px 20px;

	input {
		background-color: #fff;
		font-size: 21px;
		height: 50px;
		width: 300px;
		padding: 0 8px;
		color: #1c5d76;
		align-items: center;
		margin: 20px;
	}
`;

const ButtonWrapper = styled.button`
	text-align: center;
	text-decoration: none;
	border-style: double;
	padding: 20px;
`;

const SmurfForm = (props) => {
	const handleSubmit = () => {
		if (props.isUpdateing) {
			props.updateSmurf();
		} else {
			props.addSmurf();
		}
	};
	return (
		<div className="SmurfForm">
			<FromWrapper>
				<h2>{props.isUpdateing ? 'Update Smurf' : 'Add new Smurf'}</h2>
				<input onChange={props.handleInputChange} placeholder="name" value={props.smurf.name} name="name" />
				<input onChange={props.handleInputChange} placeholder="age" value={props.smurf.age} name="age" />
				<input
					onChange={props.handleInputChange}
					placeholder="height"
					value={props.smurf.height}
					name="height"
				/>
				<ButtonWrapper onClick={handleSubmit}>
					{props.isUpdateing ? 'Update Smurf' : 'Add new Smurf'}
				</ButtonWrapper>
			</FromWrapper>
		</div>
	);
};

export default SmurfForm;
