import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  colors,
  makeStyles, CardHeader
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 4px 4px 0 #BDC9D7',
  },
  header: {
    backgroundColor: theme.palette.common.black,
    color: '#fff'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

/**
 * Test
 * @param className
 * @param title
 * @param actions
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = ({
  className, title, actions, children, ...rest
}) => {
  const classes = useStyles();
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        text="white"
        className={classes.header}
        title={title}
      />
      {children}
      <Box padding={2}>{ actions }</Box>
    </Card>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.node
};

export default Panel;
