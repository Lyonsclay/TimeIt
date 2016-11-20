import 'react-native'
import React from 'react'


const mockRNSVGSvgView = (props) => (
  React.createElement(
    'RNSVGSvgView',
    props,
    props.children,
  )
);

describe('Clock', () => {
  it('renders', () => {
    jest.resetModules();

    const rn = require('react-native'); // eslint-disable-line global-require
    rn.Platform.OS = 'ios';
    Object.defineProperty(rn, 'requireNativeComponent', {
      get: () => jest.fn().mockReturnValue(mockRNSVGSvgView(props)),
    });

    expect(rn).toBeDefined()
    /* expect(rn).toEqual()*/
  })
})
