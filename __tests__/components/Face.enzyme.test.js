import { View, Text } from 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Face from '../../app/components/Face';
import Svg, { Line, Circle } from 'react-native-svg';

describe('Face', () => {
  const props = {
    strokeWidth: 2.5,
    width: 101.5,
    height: 101.5,
    radius: 49.5
  };
  /* let face = shallow(<View><Face {...props} /></View>);*/
  let face = shallow(<View><Face {...props} /></View>);

  it('renders', () => {
    expect(face).toBeDefined();
    expect(face.length).toEqual(1);
    expect(face).toMatchSnapshot();
    expect(face.children().props()).toEqual(props);
  });

  it('contains a Circle', () => {
    /* let circle = shallow(<Circle />);*/
    const props =  {
      cx: 50.75,
      cy: 50.75,
      r: 49.5,
      fill: '#a0cfec',
      fillOpacity: 1,
      stroke: '#728c00',
      strokeWidth: 2.5
    }

    const svgProps = {
      style: { position: 'absolute'},
      width: 101.5,
      height: 101.5
    }

    const circle = face.find(Circle);
    const line = face.find(Line);
    const text = face.find(Text);

    /* expect(face.contains('Circle')).toBe(true);*/
    expect(circle.root.children().props().height).toEqual(101.5);
    /* expect(face.root.render()).toEqual({});*/
  })
});

describe('Fully rendered Face', () => {
  /* let face = mount(<Face />);*/
})
