import axios from 'axios';
import get from 'lodash/get';
import head from 'lodash/head';
import last from 'lodash/last';

class Train {
  constructor(rataDigitrafficFiJuna) {
    Object.assign(this, rataDigitrafficFiJuna);
    this.originStation = get(
      head(rataDigitrafficFiJuna.timeTableRows),
      'stationShortCode',
      ''
    );
    this.destinationStation = get(
      last(rataDigitrafficFiJuna.timeTableRows),
      'stationShortCode',
      ''
    );
    this.compositions = [];
    this.compositionsLoaded = false;
  }

  fetchComposition = () => {
    return axios
      .get(
        `https://rata.digitraffic.fi/api/v1/compositions/${this
          .trainNumber}?departure_date=${this.departureDate}`
      )
      .then(response => {
        if (response.data.code === 'COMPOSITION_NOT_FOUND') {
          this.compositions = [];
        } else {
          this.compositions = response.data.journeySections;
        }
        this.compositionsLoaded = true;
      });
  };
}

export default Train;
