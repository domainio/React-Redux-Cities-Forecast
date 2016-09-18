import React, { Component } from 'react';
import SearchBar from '../containers/search-bar.js';
import WeatherList from '../containers/weather-list';
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Cities Forecast</h1>
        <h4>Get a five day forecast in your favorite cities!</h4>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
