/* eslint-disable react/prop-types */
// @flow

import * as React from 'react';

const Topic = (props: any) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);
export default Topic;