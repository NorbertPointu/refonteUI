import React from 'react';
import { shallow } from 'enzyme';
import Foo from './Foo'

const testState = { width: 10, height: 20 };
const wrapper = shallow((
  <Foo
    width={testState.width}
    height={testState.height}
    onChange={(e) => {
      testState[e.target.name] = e.target.value;
    }}
  />
));

expect(wrapper.find('input').at(0).prop('value')).toEqual(10);
expect(wrapper.find('input').at(1).prop('value')).toEqual(20);
wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
wrapper.find('input').at(1).simulate('change', { target: { name: 'height', value: 70 } });
expect(testState.width).toEqual(50);
expect(testState.height).toEqual(70);
