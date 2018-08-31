// @flow

import type { HelloState } from './hello';
import type { HelloLambdaState } from './HelloLambda';

export type State = {
   enthusiasm: HelloState;
   helloLambda: HelloLambdaState;
}