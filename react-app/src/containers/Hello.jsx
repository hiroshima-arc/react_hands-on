// @flow

import { connect } from 'react-redux';
import Hello from '../components/hello/Hello';
import * as actions from '../actions';
import type { State } from '../types';

export function mapStateToProps({ enthusiasm }: State) {
  return {
    enthusiasm,
  };
}

export function mapDispatchToProps(dispatch: *) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);