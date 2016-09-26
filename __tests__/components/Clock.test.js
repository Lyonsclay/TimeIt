import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../../app/components/Clock';
import Svg, { Text } from 'react-native-svg';

const Component = (props) => {
  return <Svg width={props.w} height={props.h}><Text>{JSON.stringify(props.happy)}</Text></Svg>;
};

describe('Test Svg Text with Enzyme', () => {
  it('shallow renders', () => {
    happy = { happy: 'happy', h: 120, w: 420 };
    component = React.createElement(Component, happy);
    const wrapper = shallow(component);
    expect(wrapper.props().height).toBe(120);
  });
});

describe('Clock', () => {
  it('renders', () => {
    const initialState = {
      screen: {
        width: 0,
        height: 0,
        xMid: 0,
        yMid: 0
      },

      clock: {
        diameter: 99,
        strokeWidth: 2.5,
        duration: 0.0,
        moving: false
      }
    };

    const component = React.createElement('Clock', initialState);
    const wrapper = shallow(component);
    expect(wrapper).toBeDefined();
  });
});
