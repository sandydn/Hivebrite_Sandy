import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
  expect(wrapper.debug()).toMatchSnapshot();
  });

});