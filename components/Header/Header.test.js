import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders correctly', () => {
  const tree = shallow(<Header />).html();
  expect(tree).toMatchSnapshot();
});
