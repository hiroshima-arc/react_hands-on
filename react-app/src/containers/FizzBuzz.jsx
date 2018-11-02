// @flow

import { connect } from 'react-redux';
import FizzBuzz from '../components/fizz_buzz/FizzBuzz';
import { increamen, decreamen } from '../actions/FizzBuzz';
import { FIZZ_BUZZ_API_URL } from '../constants/fizzBuzz';

type SateToProps = {
  number: number;
  value: string;
}

const mapStateToProps = ({ fizzBuzzValue }: SateToProps) => ({
  fizzBuzzValue,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onIncrement: () => dispatch(increamen(FIZZ_BUZZ_API_URL, ownProps)),
  onDecrement: () => dispatch(decreamen(FIZZ_BUZZ_API_URL, ownProps.number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FizzBuzz);