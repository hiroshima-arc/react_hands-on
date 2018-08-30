// @flow
import * as constants from '../constants';
import { HelloLambdaState } from "../types/HelloLambda";

export type NodejsApiCall = {
  type: typeof constants.NODEJS_APICALL;
  payload: HelloLambdaState[]
}

export function nodejsApiCall(): NodejsApiCall {
  return {
    type: constants.NODEJS_APICALL,
  };
}

export type LambdaApiCallAction = NodejsApiCall;