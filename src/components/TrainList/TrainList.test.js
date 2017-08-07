import React from 'react';
import TrainList from './TrainList';
import renderer from 'react-test-renderer';
import trains from '../../test-data/trains';

it('renders correctly', () => {
  const tree = renderer.create(<TrainList trains={trains} />).toJSON();
  expect(tree).toMatchSnapshot();
});
