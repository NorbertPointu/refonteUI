import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { defaultState, reducer1 } from './reducer1';

class RenderProp extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState
    this.axiosSource = null
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props
    if (prevProps.url !== url) {
      this.fetch();
    }
  }

  componentWillUnmount() {
    this.tryToCancel();
  }

  fetch = () => {
    this.tryToCancel();
    const { url } = this.props
    this.axiosSource = axios.CancelToken.source();
    axios
      .get(url, {
        cancelToken: this.axiosSource.token
      })
      .then((response) => {
        this.dispatch({ type: "fetched", payload: response.data });
      })
      .catch((error) => {
        this.dispatch({ type: "error", payload: error });
      });
  };

  dispatch(action) {
    this.setState((prevState) => reducer1(prevState, action));
  }

  tryToCancel() {
    if (this.axiosSource) {
      this.axiosSource.cancel();
    }
  }

  render() {
    const { state } = this
    const { children } = this.props
    return children(state);
  }
}

RenderProp.propTypes = {
  url: PropTypes.string,
  children: PropTypes.func,
};

export default RenderProp;
