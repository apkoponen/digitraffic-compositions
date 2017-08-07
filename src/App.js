import axios from 'axios';
import React, { Component } from 'react';
import queryString from 'query-string';
import './App.css';
import createTrain from './models/createTrain';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import TrainList from './components/TrainList/TrainList';

class App extends Component {
  constructor(props) {
    super(props);
    const queryParams = queryString.parse(window.location.search);
    this.state = {
      currentStation: queryParams.station || 'SLO',
      stations: [],
      trains: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchStations();
    this.updateTrains(this.state.currentStation);
  }

  fetchStations = () => {
    axios
      .get('https://rata.digitraffic.fi/api/v1/metadata/stations')
      .then(response =>
        this.setState({
          stations: response.data,
        })
      );
  };

  updateQueryString(stationShortCode) {
    const queryState = {
      station: stationShortCode,
    };
    window.history.pushState(
      queryState,
      '',
      `?${queryString.stringify(queryState)}`
    );
  }

  updateTrains = stationShortCode => {
    this.setState({
      loading: true,
      currentStation: stationShortCode,
    });
    this.updateQueryString(stationShortCode);
    axios
      .get(
        `https://rata.digitraffic.fi/api/v1/live-trains?station=${stationShortCode}`
      )
      .then(response => {
        const trains = response.data.map(rataDigitrafficFiJuna =>
          createTrain(rataDigitrafficFiJuna)
        );
        this.setState({
          trains,
          loading: false,
        });
        trains.forEach(train =>
          train.fetchComposition().then(() => {
            this.setState({
              trains,
            });
          })
        );
      });
  };

  render() {
    let trainList;
    if (!this.state.loading) {
      if (this.state.trains.length > 0) {
        trainList = <TrainList trains={this.state.trains} />;
      } else {
        trainList = (
          <div className="Trainlist__empty-message">No trains available.</div>
        );
      }
    } else {
      trainList = <Loader />;
    }
    return (
      <div className="App">
        <Header
          stations={this.state.stations}
          currentStation={this.state.currentStation}
          onStationChange={this.updateTrains}
        />
        <div className="App__content">
          {trainList}
        </div>
        <div className="App__footer">&copy; Ari-Pekka Koponen 2017</div>
      </div>
    );
  }
}

export default App;
