// @flow

import * as React from 'react';
import { HelloLambdaState } from '../../types/HelloLambda';
import './HelloLambda.css';

type Props = {
  helloLambda: HelloLambdaState;
  onNode: () => void;
  onJava: () => void;
  onPython: () => void;
  onDotNet: () => void;
  onGo: () => void;
};

function HelloLambda(props: Props) {
  const {
    helloLambda,
    onNode,
    onJava,
    onPython,
    onDotNet,
    onGo,
  } = props;

  return (
    <div className="hello">
      <div className="greeting">
        {`${helloLambda.name} ${helloLambda.message}`}
      </div>
      <div>
        <button type="button" onClick={onNode}>Node.js</button>
        <br />
        <button type="button" onClick={onJava}>Java</button>
        <br />
        <button type="button" onClick={onPython}>Python</button>
        <br />
        <button type="button" onClick={onDotNet}>.Net</button>
        <br />
        <button type="button" onClick={onGo}>Go</button>
      </div>
    </div>
  );
}

export default HelloLambda;