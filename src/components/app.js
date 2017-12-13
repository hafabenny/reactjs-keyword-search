import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ImuidsList from '../containers/imuids_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<ImuidsList />
      </div>
    );
  }
}