import {Config} from '../common';
import axios from 'axios';

const fetchFromApiServer = (requestType, url, data, options) => {
  return fetchApiWrapper(authKey, url, requestType, data, options);
};

const fetchApiWrapper = (headerItems, uri, requestType, data, options = {}) => {
  const url = uri;

  var config = {
    headers: {
      'Content-Type':
        requestType === 'MULTIPART'
          ? 'multipart/form-data'
          : 'application/json',
    },
    params: {...options},
  };

  if (requestType === 'GET') {
    return axios({url, method: 'get', ...config});
  } else if (requestType === 'POST') {
    return axios({url, method: 'post', data, ...config});
  } else if (requestType === 'MULTIPART') {
    return axios({url, method: 'post', data, ...config});
  } else if (requestType === 'DELETE') {
    return axios({url, method: 'delete', data, ...config});
  } else if (requestType === 'PUT') {
    return axios({url, method: 'put', data, ...config});
  } else if (requestType === 'PATCH') {
    return axios({url, method: 'patch', data, ...config});
  }
};

export default fetchFromApiServer;
