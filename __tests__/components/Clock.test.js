/* import { Text } from 'react-native';*/
import React from 'react';
/* import renderer from 'react-test-renderer';*/
import { shallow } from 'enzyme';
/* import { Provider } from 'react-redu';*/
/* import { createStore } from 'redux';*/
/* import rootReducer from '../../app/reducers/rootReducer';*/
/* import Clock from '../../app/components/clock.react';*/
/* import Clocker from '../../app/components/clocker.react';*/
import Svg, { Text } from 'react-native-svg';
/* */
/* jest.mock('Text', () => 'Text');*/
/* describe('Test Svg Text with Jest', () => {*/
/* const clocker = renderer.create(<Svg><Text>Hello</Text></Svg>).toJSON();*/
/* */
/* it('clockers', () => {*/
/* expect(clocker).toMatchSnapshot();*/
/* })*/
/* })*/
/* */

const Component = (props) => {

  return <Svg width={props.w} height={props.h}><Text>{JSON.stringify(props.happy)}</Text></Svg>;
}

describe('Test Svg Text with Enzyme', () => {
  it('shallow renders', () => {
    happy = { happy: 'happy', h: 120, w: 420 }
    component = React.createElement(Component, happy);
    const wrapper = shallow(component);
    expect(wrapper.props().height).toBe(120);
  })
})
