import React from 'react';
import { View, Text } from 'react-native';
import Round from '../../app/components/Round';
import Svg, { Circle } from 'react-native-svg';
/* import renderer from 'react-test-renderer';*/
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
    const obj = Object.getOwnPropertyNames(round.props.children);
    const classy = round.props.children.props.children.type;
    const classObject = new round.props.children.props.children.type();
    /* const classObject = new round.props.children.props.children.props.children.type();*/

    const roundClass = new round.type();
    /* expect(roundClass.constructor.name).toEqual('Component');*/
    /* expect(classy).toEqual('');*/
    /* expect(classObject.constructor.name).toEqual('')*/
    /* expect(round.props.children.constructor.name).toEqual({});*/
    /* expect(classObject.constructor.name).toEqual({});*/
    /* expect(obj).toEqual({});*/
  });
});

describe('containsComponent', () => {
  let renderer = utils.createRenderer();
  describe('with a React Native Component', () => {
    renderer.render(<View><Text>Hello</Text><Text>Funny</Text></View>);
    /* renderer.render(<View><Text>Funny</Text></View>);*/
    const text = renderer.getRenderOutput();
    it('bludgeons complex objects', () => {
      expect(containsComponent(text, 'Text')).toEqual(true);
    });
  });
  describe('with a custom component', () => {
    renderer.render(<Svg><Circle></Circle></Svg>);
    const circle = renderer.getRenderOutput();
    it('turns it out', () => {
      expect(containsComponent(circle, 'Circle')).toEqual(true);
    });
  })
});