import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Face from '../../app/components/DeFace'


jest.mock('../../node_modules/react-native-svg/elements/Circle.js', () => 'Circle')
jest.mock('../../node_modules/react-native-svg/elements/Line.js', () => 'Line')

const props = {
  app: {
    mode: ['INIT', 'SELECT', 'RUN', 'FREEZE']
  },
  timer: {
    duration: 30,
    startTime: 0,
    remainder: 30,
  },
  screen: {
    width: 0,
    height: 0
  },
  clock: {
    diameter: 99,
    strokeWidth: 2.5,
  }
}

describe('Face', () => {
  it('renders', () => {
    const deface = renderer.create(<Face {...props} />).toJSON()

    expect(deface).toBeDefined()
  })
})
