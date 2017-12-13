import React, { Component } from 'react';

import { connect } from 'react-redux';

class ImuidList extends Component {
	renderImuid(imuidData) {
		const conceptId = imuidData.conceptId;
		const conceptName = imuidData.conceptName;
		const k1 = imuidData.k1Value;
		const k2 = imuidData.k2Value;

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
		  <p>Number of results: {this.props.imuid.length}</p>
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
					{this.props.imuid.map(this.renderImuid)}
				</tbody>
			</table>
			</div>
		);
	}
}

function mapStateToProps({imuid}) {
	return { imuid };
}

export default connect(mapStateToProps)(ImuidList);