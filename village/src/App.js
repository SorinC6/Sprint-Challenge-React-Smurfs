import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const WrapperNav = styled.nav`
	width: 100%;
	background-color: grey;
	display: flex;
	justify-content: space-evenly;
	padding: 20px;
`;

const smurf = {
	name: '',
	age: '',
	height: ''
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			error: '',
			loading: false,
			smurf: smurf,
			isUpdateing: false
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		this.startSpinner();
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => this.setState({ smurfs: res.data }))
			.catch((err) => this.setState({ error: err.message }))
			.finally(this.stopSpinner());
	}

	addSmurf = () => {
		axios
			.post('http://localhost:3333/smurfs', this.state.smurf)
			.then((res) =>
				this.setState({
					smurfs: res.data,
					smurf: {
						name: '',
						age: '',
						height: ''
					}
				})
			)
			.catch((err) => console.log(err));

		this.props.history.push('/');
	};

	deleteSmurf = (id) => {
		this.startSpinner();
		//console.log(id)
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then((res) => this.setState({ smurfs: res.data }))
			.catch((err) => this.setState({ error: err.message }))
			.finally(this.stopSpinner());
	};

	pupulateSmurfFields = (id) => {
		//console.log(id);
		this.setState({
			smurf: this.state.smurfs.find((sm) => sm.id === id),
			isUpdateing: true
		});
		this.props.history.push('/smurf-form');
	};

	updateSmurf = () => {
		this.startSpinner();
		axios
			.put(`http://localhost:3333/smurfs/${this.state.smurf.id}`, this.state.smurf)
			.then(
				(res) =>
					this.setState({
						smurfs: res.data,
						isUpdateing: false,
						smurf: smurf
					}),
				this.props.history.push('/')
			)
			.catch((err) => this.setState({ error: err.message }))
			.finally(this.stopSpinner());
	};

	handleInputChange = (e) => {
		e.persist();
		this.setState((prevState) => {
			return {
				smurf: {
					...prevState.smurf,
					[e.target.name]: e.target.value
				}
			};
		});
	};

	startSpinner = () => {
		this.setState({ loading: true });
	};
	stopSpinner = () => {
		this.setState({ loading: false });
	};

	render() {
		if (this.state.loading) {
			return <div style={{ textAlign: 'center', color: 'red' }}>Loading...</div>;
		}

		if (this.state.error) {
			return (
				<div style={{ textAlign: 'center', color: 'red' }}>
					<div>Argh! This failed rather miserably. {this.state.error.message}</div>
				</div>
			);
		}
		return (
			<div className="App">
				<WrapperNav>
					<NavLink
						to="/"
						activeStyle={{
							fontWeight: 'bold',
							color: 'white',
							fontWeight: 'bold'
						}}
					>
						Home
					</NavLink>
					<NavLink
						to="/smurf-form"
						activeStyle={{
							fontWeight: 'bold',
							color: 'white',
							fontWeight: 'bold'
						}}
					>
						{this.state.isUpdateing ? 'Update Smurf' : 'Add Smurf'}
					</NavLink>
				</WrapperNav>

				<Route
					exact
					path="/smurf-form"
					render={(props) => (
						<SmurfForm
							{...props}
							handleInputChange={this.handleInputChange}
							addSmurf={this.addSmurf}
							updateSmurf={this.updateSmurf}
							smurf={this.state.smurf}
							isUpdateing={this.state.isUpdateing}
						/>
					)}
				/>

				<Route
					exact
					path="/"
					render={(props) => (
						<Smurfs
							{...props}
							smurfs={this.state.smurfs}
							deleteSmurf={this.deleteSmurf}
							pupulateSmurfFields={this.pupulateSmurfFields}
							textBtn="Delete Smurf"
							textBtnUpdate="Update Smurf"
						/>
					)}
				/>
			</div>
		);
	}
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
