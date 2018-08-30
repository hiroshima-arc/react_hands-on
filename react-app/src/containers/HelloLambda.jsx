// @flow

import { connect } from 'react-redux';
import Hello from '../components/hello_lambda/HelloLambda';
import * as actions from '../actions/HelloLambda';
import type { State } from '../types';

export function mapStateToProps({ helloLambda }: State) {
  return {
    helloLambda,
  };
}

export function mapDispatchToProps(dispatch: *) {
  return {
    onNode: () => dispatch(actions.nodejsApiCall()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);