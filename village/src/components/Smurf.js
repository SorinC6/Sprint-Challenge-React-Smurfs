import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const SmurfDiv = styled.div`
	padding: 10px;
	border-style: double;
	max-width: 40%;
	margin: 15px auto;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	transition: 0.25s ease-in-out;
	border: 1px solid rgba(0, 0, 0, 0.1);
   background: rgba(198, 216, 134, 0.5); 

	&:hover {
		transform: scale(1.09);
		transition: 0.25s ease-in-out;
	}
`;

const BtnWrapper = styled.button`
	padding: 5px;
	border-radius: 5px;
	color: black;
	margin: 10px;
	&:hover {
		background-color: black;
		color: white;
	}
`;
const Smurf = (props) => {
	return (
		<SmurfDiv className="Smurf">
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
			<BtnWrapper onClick={() => props.deleteSmurf(props.id)}>{props.textBtn}</BtnWrapper>
			<BtnWrapper onClick={() => props.pupulateSmurfFields(props.id)}>{props.textBtnUpdate}</BtnWrapper>
		</SmurfDiv>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};

export default Smurf;

Smurf.propTypes = {
	name: PropType.string.isRequired,
	height: PropType.number.isRequired,
	height: PropType.string.isRequired
};
