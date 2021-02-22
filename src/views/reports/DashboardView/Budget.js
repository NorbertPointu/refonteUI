import React from 'react';
import PropTypes from 'prop-types';
import {
  colors,
  makeStyles
} from '@material-ui/core';
import Panel from '../../../components/common/Panel';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
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

const Budget = ({ className, ...rest }) => {
  const classes = useStyles();
  const actions = (
    <div>ldjlsqkjdlksqd</div>
  )
  return (
    <Panel title="Management module" className={classes} actions={actions} {...rest} />);
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
