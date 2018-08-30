// @flow
import { isProd } from './utils';

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';

export const NODEJS_APICALL = 'NODEJS_APICALL';
export const NODEJS_APICALL_REQUEST = 'NODEJS_APICALL_REQUEST';
export const NODEJS_APICALL_SUCCESS = 'NODEJS_APICALL_SUCCESS';
export const NODEJS_APICALL_FAILURE = 'NODEJS_APICALL_FAILURE';
export const JAVA_APICALL_REQUEST = 'JAVA_APICALL_REQUEST';
export const JAVA_APICALL_SUCCESS = 'JAVA_APICALL_SUCCESS';
export const JAVA_APICALL_FAILURE = 'JAVA_APICALL_FAILURE';


export const NODEJS_HELLO_API_URL = isProd ? 'https://oz5g8ny2w6.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';
export const JAVA_HELLO_API_URL = isProd ? 'https://o83g21eagc.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';