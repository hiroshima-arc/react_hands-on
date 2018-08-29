/* eslint-disable react/prop-types */
// @flow

import * as React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import Topic from './Topic';

const Topics = (props: any) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
            Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
            Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
            Props v. State
        </Link>
      </li>
    </ul>
    <Route path={`${props.match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.path}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);
export default Topics;