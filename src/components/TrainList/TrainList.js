import React, { Component } from 'react';
import Train from './Train';
import './TrainList.css';

class TrainList extends Component {
  render() {
    const trains = this.props.trains.map(train =>
      <div
        className="TrainList__item"
        key={train.trainNumber + train.departureDate}
      >
        <Train train={train} />
      </div>
    );
    return (
      <div className="TrainList">
        {trains}
      </div>
    );
  }
}

export default TrainList;
