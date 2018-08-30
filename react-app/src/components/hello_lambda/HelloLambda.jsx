// @flow

import * as React from 'react';
import { HelloLambdaState } from '../../types/HelloLambda';
import './HelloLambda.css';

type Props = {
  helloLambda: HelloLambdaState;
  onNode: () => void;
};

function HelloLambda(props: Props) {
  const {
    helloLambda,
    onNode,
  } = props;

  return (
    <div className="hello">
      <div className="greeting">
        {`${helloLambda.name} ${helloLambda.message}`}
      </div>
      <div>
        <button type="button" onClick={onNode}>Node.js</button>
      </div>
    </div>
  );
}

export default HelloLambda;