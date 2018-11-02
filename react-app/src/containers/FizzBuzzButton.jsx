// @flow

import { connect } from 'react-redux';
import FizzBuzzButton from '../components/fizz_buzz/FizzBuzzButton';
import { increamen, decreamen } from '../actions/FizzBuzz';
import { FIZZ_BUZZ_API_URL } from '../constants/fizzBuzz';

type SateToProps = {
  number: number;
}

const mapStateToProps = ({ number }: SateToProps) => ({
  number,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onIncrement: () => dispatch(increamen(FIZZ_BUZZ_API_URL, ownProps.number)),
  onDecrement: () => dispatch(decreamen(FIZZ_BUZZ_API_URL, ownProps.number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FizzBuzzButton);