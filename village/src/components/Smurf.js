import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const SmurfDiv = styled.div`
	padding: 10px;
	border-style: double;
	max-width: 40%;
	margin: 0 auto;
`;

const BtnWrapper=styled.button`
   padding:5px;
   border-radius:5px;
   color:black;
   margin:10px;
   &:hover{
      background-color:black;
      color:white;
   }
`
const Smurf = (props) => {
	return (
		<SmurfDiv className="Smurf">
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
			<BtnWrapper onClick={()=>props.deleteSmurf(props.id)}>{props.textBtn}</BtnWrapper>
			<BtnWrapper onClick={()=>props.updateSmurf(props.id)}>{props.textBtn}</BtnWrapper>
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
