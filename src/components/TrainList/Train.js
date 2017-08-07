import React, { Component } from 'react';
import TrainComposition from './TrainComposition';
import TrainStatus from './TrainStatus';
import './Train.css';

class Train extends Component {
  render() {
    const { train } = this.props;
    let compositions;
    if (train.compositionsLoaded) {
      if (train.compositions.length > 0) {
        compositions = train.compositions.map(composition =>
          <div
            className="Train__composition-wrapper"
            key={composition.beginTimeTableRow.scheduledTime}
          >
            <TrainComposition composition={composition} />
          </div>
        );
      } else {
        compositions = <div>No composition information available.</div>;
      }
    } else {
      compositions = <TrainComposition skeleton />;
    }

    return (
      <div className="Train">
        <div className="Train__status">
          <TrainStatus running={train.runningCurrently} />
        </div>
        <h2>
          {train.trainType}
          {train.trainNumber} {train.originStation}-{train.destinationStation}
        </h2>
        {compositions}
      </div>
    );
  }
}

export default Train;
