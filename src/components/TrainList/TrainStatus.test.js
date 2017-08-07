import React from 'react';
import TrainStatus from './TrainStatus';
import renderer from 'react-test-renderer';

it('renders running status correctly', () => {
  const tree = renderer.create(<TrainStatus running />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders stopped status correctly', () => {
  const tree = renderer.create(<TrainStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});
