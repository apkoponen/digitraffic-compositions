import React from 'react';
import Skeleton from './Skeleton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Skeleton width="20" />).toJSON();
  expect(tree).toMatchSnapshot();
});
