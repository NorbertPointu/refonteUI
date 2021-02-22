import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

const Label2Lines = ({ first, second }) => (
  <Grid container direction="column" justify="left">
    <Box>
      <span style={{ flex: 'no-wrap' }}>
        {first.label}
        {' :'}
      </span>
      <span style={{ marginLeft: '4px' }}>
        {first.value}
      </span>
    </Box>
    {second && (
      <Box>
        <span>
          {second.label}
          {' :'}
        </span>
        <span style={{ marginLeft: '4px' }}>
          {second.value}
        </span>
      </Box>
    )}
  </Grid>
);

Label2Lines.propTypes = {
  first: PropTypes.object,
  second: PropTypes.object
};

export default Label2Lines;
