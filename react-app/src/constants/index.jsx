// @flow
import { isProd } from './utils';

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';

export const APICALL_REQUEST = 'APICALL_REQUEST';
export const APICALL_SUCCESS = 'APICALL_SUCCESS';
export const APICALL_FAILURE = 'APICALL_FAILURE';

export const NODEJS_HELLO_API_URL = isProd ? 'https://oz5g8ny2w6.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';
export const JAVA_HELLO_API_URL = isProd ? 'https://o83g21eagc.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';
export const PYTHON_HELLO_API_URL = isProd ? 'https://c5swe8u96a.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';
export const DOTNET_HELLO_API_URL = isProd ? 'https://rlb0lspmnf.execute-api.us-east-1.amazonaws.com/Prod/hello/' : 'http://localhost:3001/hello';