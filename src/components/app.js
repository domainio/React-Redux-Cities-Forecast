import React, { Component } from 'react';
import SearchBar from '../containers/search-bar.js';
import WeatherList from '../containers/weather-list';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Cities Forecast</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
