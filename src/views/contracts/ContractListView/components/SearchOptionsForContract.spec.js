import { expect as expectChai } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import SearchOptionsForContract from './SearchOptionsForContract';

describe('<SearchOptionsForContract />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <div>
        <SearchOptionsForContract />
      </div>
    );
    expectChai(wrapper).to.contain(<SearchOptionsForContract />);
  });

  it('renders with select input', () => {
    const wrapper = shallow(<SearchOptionsForContract />);
    expectChai(wrapper.find('#selectOptionsForContract')).to.have.length(1);
  });
  it('set default value', () => {
    const testingValue = 'van$model';
    const onClick = jest.fn()
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallow(
      <SearchOptionsForContract
        defaultValue={testingValue}
        onClick={onClick}
      />
    );

    expect(wrapper.find('SearchOptionsForContract').at(0).prop('value')).toEqual(testingValue);

    // wrapper.simulate('click', testingValue)
    // sinon.assert.calledWith(onChange, testingValue)
    // expect(onChange).to.have.been.ca
    // expect(onChange).to.have.been.calledWith(testingValue)
    // expect(onClick).toHaveBeenCalledTimes(1)
  });
});
