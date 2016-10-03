import React from 'react';
import { View, Text } from 'react-native';
import Round from '../../app/components/Round';
import Svg, { Circle } from 'react-native-svg';
import utils from 'react-addons-test-utils';
import containsComponent from '../../__test_helpers__/contains_component';

describe('Round', () => {
  const props = {
    strokeWidth: 2.5,
    width: 101.5, height: 101.5,
    radius: 49.5
  };
  const renderer = utils.createRenderer();
  renderer.render(<Round {...props} />);
  const round = renderer.getRenderOutput();

  it('dont know', () => {
    const roundClass = new round.type();

    expect(roundClass.constructor.name).toEqual('Svg');
  });
});

describe('containsComponent', () => {
  let renderer = utils.createRenderer();

  describe('with a React Native Component', () => {
    it('finds a single child', () => {
      renderer.render(<View><Text>Hello</Text><Text>Funny</Text></View>);
      const text = renderer.getRenderOutput();

      expect(containsComponent(text, 'Text')).toEqual(true);
    });

    it('finds children components', () => {
      renderer.render(<View><Text>Funny</Text></View>);
      const text = renderer.getRenderOutput();

      expect(containsComponent(text, 'Text')).toEqual(true);
    });
  });

  describe('with a custom component', () => {
    renderer.render(<Svg><Circle></Circle></Svg>);
    const circle = renderer.getRenderOutput();
    it('turns it out', () => {
      expect(containsComponent(circle, 'Circle')).toEqual(true);
    });
  });

  describe('with a user defined component', () => {
    renderer.render(<View><Round {...props} /></View>);
    const circle = renderer.getRenderOutput();
    const props = {
      strokeWidth: 2.5,
      width: 101.5, height: 101.5,
      radius: 49.5
    };
    round = renderer.getRenderOutput();

    fit('renders', () => {
      expect(containsComponent(round, 'Circle')).toBe(true);
    })
  })
});
