import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImuid } from '../actions/index';


class SearchBar extends Component {
	// change input field to controlled element
	// declarative value (input field gets its value from state)
	//
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// need to bind component class context of "this" to callback function of DOM events
		// for example: onInputChange, onFormSubmit
		// the context of the callback is no longer the component class context
		// so, need to bind class this to DOM event callback
		// or can use fat arrow function in DOM event callback
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	// on DOM event handlers have an event object
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	// fetch weather data
	onFormSubmit(event) {

		// don't submit form if user presses enter key or submit button
		event.preventDefault();

		// We need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		//this.setState({ term: '' });

	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Search for imuid by concepts"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchImuid }, dispatch);
}

// mapDispatchToProps must be second argument and this component doesn't care about state
// so pass null as first argument
export default connect(null, mapDispatchToProps)(SearchBar);

