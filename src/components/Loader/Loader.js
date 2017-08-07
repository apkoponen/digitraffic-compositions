import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="Loader__spinner">Loading...</div>
      </div>
    );
  }
}

export default Loader;
