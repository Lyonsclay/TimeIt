import { connect } from 'react-redux';
import Clock from '../components/Clock';

const mapStateToProps = (state) => {
  return {
    clock: state.clock,
    screen: state.screen
  };
};

const ClockAnimated = connect(mapStateToProps)(Clock);

export default ClockAnimated;
