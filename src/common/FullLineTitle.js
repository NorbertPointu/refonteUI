import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader } from '@material-ui/core';

const FullLineTitle = ({ title }) => {
  return (
    <CardHeader style={{ backgroundColor: '#c29fff', height: '26px' }} title={title} />
  )
}
FullLineTitle.propTypes = {
  title: [PropTypes.string, PropTypes.node]
};

export default FullLineTitle
