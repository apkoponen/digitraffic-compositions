import React from 'react';
import StationSelector from './StationSelector';
import renderer from 'react-test-renderer';
import stations from '../../test-data/stations';

it('renders correctly', () => {
  const tree = renderer
    .create(<StationSelector stations={stations} currentStation="HJ" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
