import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Clock from '../../app/components/clock.react';

describe('<Clock />', () => {
  const clock = TestUtils.renderIntoDocument(
    <Clock />
  );
  const clockNode = ReactDOM.findDOMNode(clock);

  it('has a <Circle />', ()  => {
    expect(clockNode).toBe(clock);
  });
});
