import React, { Component } from 'react';

import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		// const name = cityData.city.name;
		// const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp * 9/5 - 459.67);
		// const pressures = cityData.list.map(weather => weather.main.pressure);
		// const humidities = cityData.list.map(weather => weather.main.humidity);
		const conceptId = cityData.conceptId;
		const conceptName = cityData.conceptName;
		const k1 = cityData.k1Value;
		const k2 = cityData.k2Value;


    // es6 syntax sugar
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		//const { lon, lat } = cityData.city.coord;


// 				<td>{name}</td>

		// return (
		// 	<tr key={name}>
		// 		<td><GoogleMap lon={lon} lat={lat} /></td>
		// 		<td>
		// 			<Chart data={temps} color="orange" units="F" />
		// 		</td>
		// 		<td>
		// 			<Chart data={pressures} color="green" units="hPa" />
		// 		</td>
		// 		<td>
		// 			<Chart data={humidities} color="black" units="%" />
		// 		</td>
		// 	</tr>
		// )
		return (
			<tr key={conceptId}>
				<td>
					{conceptId}
				</td>
				<td>
					{conceptName}
				</td>
				<td>
					{k1}
				</td>
				<td>
					{k2}
				</td>
			</tr>
		)
	}

	render() {
		return (
		  <div>
		  <p>Number of results: {this.props.weather.length}</p>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>IMUID</th>
						<th>Concept Name</th>
						<th>K1</th>
						<th>K2</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			</div>
		);
	}
}

// ES6 syntax sugar:
// function mapStateToProps(state) {
// 	return { weather: state.weather };
// }
// 
// function mapStateToProps(state) {
// 	const weather = state.weather;
// 	return { weather: weather };
// }
//
// if you are only going to use one property in state
// you can shorten argument state to just that property instead of bringing the whole object
//
// function mapStateToProps({weather}) {
// 	return { weather: weather };
// }
//
// if you are returning an object with the key and value with the same name
// you can shorten to just the name
// function mapStateToProps({weather}) {
// 	return { weather };
// }
function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);