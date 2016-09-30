import React from 'react';
import 'react-native';
import Clock from '../../app/components/Clock';
import Face from '../../app/components/Face';
import Hand from '../../app/components/Hand';
import Svg, { Text } from 'react-native-svg';
/* import renderer from 'react-test-renderer';*/
import utils from 'react-addons-test-utils';

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
  const output = renderer.getRenderOutput();

  it('renders', () => {
    expect(output.props.children[0].props.radius).toEqual(49.5);
    expect(output.props.children.length).toEqual(2);
  });

  it('renders a children components', () => {
    const props = {
      strokeWidth: 2.5,
      width: 101.5,
      height: 101.5,
      radius: 49.5
    };
    const text = <Text>Hello</Text>;
    const face = React.createElement('Face', props);
    expect(output.props.children[0].props).toEqual(face.props);
  });
});
