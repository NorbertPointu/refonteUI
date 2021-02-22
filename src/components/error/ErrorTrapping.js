import React from 'react';
import PropTypes from 'prop-types'
import ErrorDataService from '../../services/api/firebase/ErrorDataService'
import getCurrentDateTime from '../../utils/getCurrentDataTime';

class ErrorTrapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: null,
    };
  }

  static getDerivedStateFromError() {
    console.log('ICi')
    // Update state so next render shows fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    this.logError(error, info);
  }

  logError = (error, info) => {
    const errorJSON = JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
    ErrorDataService.create({
      error: errorJSON, componentStack: info.componentStack, type: 'front-ui', date: getCurrentDateTime(), user: 'John'
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}

ErrorTrapping.propTypes = {
  children: PropTypes.node,
};

export default ErrorTrapping;
