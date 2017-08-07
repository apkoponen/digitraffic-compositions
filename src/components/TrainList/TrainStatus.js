import React, { Component } from 'react';
import './TrainStatus.css';

class TrainStatus extends Component {
  render() {
    const statusClass = this.props.running ? 'running' : 'stopped';
    const statusText = this.props.running ? 'Moving' : 'Stopped';

    return (
      <div className={`TrainStatus ${statusClass}`}>
        <span className="TrainStatus__dot" />
        {statusText}
      </div>
    );
  }
}

export default TrainStatus;
