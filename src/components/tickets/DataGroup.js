/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4

  }
});

const DataGroup = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Box width="400px" mb={2} ml={2}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        {title}
      </Typography>
      {content}

    </Box>
  );
};

export default DataGroup;
