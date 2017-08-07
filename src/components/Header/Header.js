import React, { Component } from 'react';
import InlineLoader from '../Loader/InlineLoader';
import StationSelector from '../StationSelector/StationSelector';
import './Header.css';

class Header extends Component {
  handleStationChange = event => {
    this.props.onStationChange(event.target.value);
  };

  render() {
    let stationSelector;
    if (this.props.stations.length > 0) {
      stationSelector = (
        <StationSelector
          stations={this.props.stations}
          currentStation={this.props.currentStation}
          onChange={this.handleStationChange}
        />
      );
    } else {
      stationSelector = <InlineLoader />;
    }

    return (
      <div className="Header group">
        <h1 className="Header__brand">Train Composition Viewer</h1>
        <div className="Header__station-selector">
          {stationSelector}
        </div>
      </div>
    );
  }
}

export default Header;
