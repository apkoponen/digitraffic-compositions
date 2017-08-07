import React from 'react';
import InlineLoader from './InlineLoader';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InlineLoader />).toJSON();
  expect(tree).toMatchSnapshot();
});
