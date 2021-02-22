import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { defaultState, reducer1 } from './reducer1';

const useRequest1 = (url) => {
  const [state, dispatch] = React.useReducer(reducer1, defaultState);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(url, {
        cancelToken: source.token
      })
      .then((response) => {
        dispatch({ type: "fetched", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "error", payload: error });
      });
    return source.cancel;
  }, [url]);

  return [state];
};

useRequest1.propTypes = {
  url: PropTypes.string,
};

export default useRequest1
