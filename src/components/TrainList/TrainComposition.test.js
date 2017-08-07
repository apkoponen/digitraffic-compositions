import React from 'react';
import TrainComposition from './TrainComposition';
import renderer from 'react-test-renderer';
import trains from '../../test-data/trains';

it('renders correctly', () => {
  const tree = renderer
    .create(<TrainComposition composition={trains[0].compositions[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders skeleton correctly', () => {
  const tree = renderer.create(<TrainComposition skeleton />).toJSON();
  expect(tree).toMatchSnapshot();
});
