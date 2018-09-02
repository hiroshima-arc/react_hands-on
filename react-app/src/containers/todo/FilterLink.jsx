// @flow

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/todo';
import Link from '../../components/todo/Link';

const mapStateToProps = (state: any, ownProps: any) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => {
    console.log(ownProps);
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;