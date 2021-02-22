import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import NavBar from './layouts/DashboardLayout/NavBar';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Router>
      <App />
    </Router>
  );
  expect(wrapper).to.contain(<App />);
});
