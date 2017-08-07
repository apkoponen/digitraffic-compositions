import React, { Component } from 'react';
import './StationSelector.css';

class StationSelector extends Component {
  render() {
    const options = this.props.stations.map(station =>
      <option key={station.stationShortCode} value={station.stationShortCode}>
        {station.stationName}
      </option>
    );
    return (
      <select
        className="StationSelector"
        value={this.props.currentStation}
        onChange={this.props.onChange}
      >
        {options}
      </select>
    );
  }
}

export default StationSelector;
