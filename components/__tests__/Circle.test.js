import React from 'react';
import renderer from 'react-test-renderer';
import Circle from '../Circle';

describe('<Circle />', () => {
  it('has 0 children', () => {
    const tree = renderer.create(<Circle />).toJSON();
    expect(tree.children).toBe(null);
  });
});

test('renders correctly', () => {
  const tree = renderer.create(<Circle />).toJSON();
  expect(tree).toMatchSnapshot();
});
