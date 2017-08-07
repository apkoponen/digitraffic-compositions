import React, { Component } from 'react';
import './Skeleton.css';

class Skeleton extends Component {
  render() {
    const style = {
      width: this.props.width + 'px',
    };
    return <span className="Skeleton" style={style} />;
  }
}

export default Skeleton;
