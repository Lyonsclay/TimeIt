import { View, Text } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../../app/components/Clock';
import Face from '../../app/components/Face';
import Svg, { Line, Circle } from 'react-native-svg';

class Nope extends React.Component {
  render() {
    return (
      <Face
        strokeWidth={2.5}
        width={200}
        height={200}
        radius={99}
      />
    );
  }
}

describe('Face', () => {
  const props = {
    strokeWidth: 2.5,
    width: 101.5,
    height: 101.5,
    radius: 49.5
  };

  it('renders', () => {
    let face = shallow(<View><Face {...props} /></View>);
    expect(face).toBeDefined();
    expect(face.length).toEqual(1);
    expect(face).toMatchSnapshot();
    expect(face.children().props().radius).toEqual(49.5);
  });
});

describe('Clock', () => {
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
  const props = {
    strokeWidth: 2.5,
    width: 101.5,
    height: 101.5,
    radius: 49.5
  };

  it('renders', () => {
    const clock = shallow(<Clock {...initialState} />);
    const face = () => (<Face {...props} />);
    expect(clock.contains(<Face {...props} />)).toBe(true);
    expect(clock.contains(face())).toBe(true);
  });
});

describe('RN View and Text', () => {
  const Funny = () => {
    return (
      <View><Text>Funny</Text></View>
    );
  };

  it('contains Text', () => {
    const view = shallow(<Funny />);
    expect(view.contains(<Text>Funny</Text>)).toBe(true);
  });
});
