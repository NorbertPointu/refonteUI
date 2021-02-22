import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { green, pink } from '@material-ui/core/colors';

/**
 * Encapsule les appels API
 * @type {(props?: any) => ClassNameMap<"pink"|"green"|"contentContainer"|"fab"|"root"|"wrapper"|"avatar"|"content">}N
 */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  fab: {
    position: 'absolute',
    zIndex: 2000,
    bottom: theme.spacing(2),
    left: theme.spacing(2)
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: '8px',
  },
}));

const APIWrapper = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const toggle = () => dispatch({ type: 'toggle', payload: { } })
  const useAxios = useSelector((state) => state.aiaWrapper.useAxios);
  const countSuccess = useSelector((state) => state.aiaWrapper.query.countSuccess);
  const countError = useSelector((state) => state.aiaWrapper.query.countError);

  return (
    <Fab variant="extended" color={useAxios ? 'primary' : 'inherit'} className={classes.fab} onClick={toggle}>
      <NavigationIcon />
      {useAxios ? 'AIA' : 'Cache'}
      <Avatar className={[classes.green, classes.avatar]}>{countSuccess}</Avatar>
      <Avatar className={[classes.pink, classes.avatar]}>{countError}</Avatar>
    </Fab>
  );
};

export default APIWrapper
