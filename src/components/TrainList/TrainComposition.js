import React, { Component } from 'react';
import Skeleton from '../Skeleton/Skeleton';
import './TrainComposition.css';

class TrainComposition extends Component {
  formatLocomotive = locomotives => {
    return locomotives
      .map(locomotive => `${locomotive.locomotiveType} ${locomotive.powerType}`)
      .join(', ');
  };

  formatWagons = (wagons, length) => {
    const formattedWagons = wagons
      .filter(wagon => wagon.wagonType)
      .map(wagon => wagon.wagonType)
      .join(', ');
    return `${formattedWagons} (${length} meters)`;
  };

  render() {
    const { composition, skeleton } = this.props;
    let locomotive, wagons, maxSpeed, originStation, destinationStation;
    if (skeleton) {
      locomotive = <Skeleton width="50" />;
      wagons = <Skeleton width="100" />;
      maxSpeed = <Skeleton width="50" />;
      originStation = <Skeleton width="25" />;
      destinationStation = <Skeleton width="25" />;
    } else {
      locomotive = this.formatLocomotive(composition.locomotives);
      wagons = this.formatWagons(composition.wagons, composition.totalLength);
      maxSpeed = composition.maximumSpeed + ' km/h';
      originStation = composition.beginTimeTableRow.stationShortCode;
      destinationStation = composition.endTimeTableRow.stationShortCode;
    }

    return (
      <div className="TrainComposition">
        <div className="TrainComposition__content">
          <p>
            <strong>Locomotive:</strong> {locomotive}
          </p>
          <p>
            <strong>Wagons:</strong> {wagons}
          </p>
          <p>
            <strong>Max speed:</strong> {maxSpeed}
          </p>
        </div>
        <div className="TrainComposition__timeline">
          <div className="TrainComposition__origin-station">
            {originStation}
          </div>
          <div className="TrainComposition__destination-station">
            {destinationStation}
          </div>
        </div>
      </div>
    );
  }
}

export default TrainComposition;
