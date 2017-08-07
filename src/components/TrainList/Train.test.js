import React from 'react';
import Train from './Train';
import renderer from 'react-test-renderer';
import trains from '../../test-data/trains';

it('renders correctly', () => {
  const tree = renderer.create(<Train train={trains[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
