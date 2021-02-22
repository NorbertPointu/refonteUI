import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  label: {
    fontSize: 12,
    fontWeight: 'normal',
    width: 100
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  icon: {
    width: '36px'
  }
});
const DataGroupItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box display="flex">
      <Typography className={classes.label} color="textSecondary" gutterBottom>
        {item.label}
      </Typography>
      <Typography className={classes.value} color="textPrimary" gutterBottom>
        {item.value}
      </Typography>
    </Box>
  );
};

DataGroupItem.propTypes = {
  item: PropTypes.object
};

export default DataGroupItem;
