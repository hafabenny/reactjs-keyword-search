import React, { Component } from 'react';

class GoogleMap extends Component {

	// this is how to work (integrate) with third party libraries
	// that don't know how to work with react on the page
	//

	// react lifecycle method
	componentDidMount() {

		// create a new google map (embedded map inside a document)
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}



	// get direct reference of an HTML element that has been
	// rendered to the page
	// syntax:
	// this.refs.map
	//
	render() {
		return <div ref="map" />;
	}

}


export default GoogleMap;