import React from 'react';
import { View } from 'react-native';
import Clock from '../../app/components/Clock';
import Face from '../../app/components/Face';
import Hand from '../../app/components/Hand';
import Svg, { Circle, Line, Text } from 'react-native-svg';
import utils from 'react-addons-test-utils';
import containsComponent from '../../__test_helpers__/contains_component';

describe('render Clock with Jest', () => {
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
  const renderer = utils.createRenderer();
  renderer.render(<Clock {...initialState} />);
  const clock = renderer.getRenderOutput();

  it('renders', () => {
    expect(clock).toBeDefined()
  });

  it('renders children with props', () => {
    expect(clock.props.children[0].props.radius).toEqual(49.5);
    expect(clock.props.children.length).toEqual(2);
  });

  it('renders a child with props', () => {
    const props = {
      strokeWidth: 2.5,
      width: 101.5, height: 101.5,
      radius: 49.5
    };

    expect(clock.props.children[0].props).toEqual(props);
  });

  it('has a Face', () => {

  const renderer = utils.createRenderer();
    renderer.render(<Clock {...initialState} />);
    const clock = renderer.getRenderOutput();

    console.log('****************** Clock ^^^^^^^^^^^^^^^^^hh')
    const children = clock.props.children
    console.log(children);

    /* expect(clock).toEqual({});*/
    /* expect(containsComponent(clock, 'Clock')).toBe(true);*/
    expect(containsComponent(clock, 'Face')).toBe(true);
  });
});
