import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import TodayIcon from '@material-ui/icons/Today';
import FolderIcon from '@material-ui/icons/Folder';
import BusinessIcon from '@material-ui/icons/Business';
import Label2Lines from '../../common/Label2Lines';
import FullLineTitle from '../../common/FullLineTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TicketDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FullLineTitle title="Ticket details" />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemIcon>
            <PersonIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <Label2Lines first={{ label: 'Customer', value: '' }} second={{ label: 'Ticket', value: 'Operation-Arbitrage' }} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TodayIcon fontSize="large" color="error" />
          </ListItemIcon>
          <ListItemText>
            <Label2Lines
              first={{ label: 'Received', value: '16/11/2020' }}
              second={{
                label: 'Deadline',
                value: <b>30/11/2020</b>
              }}
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FolderIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <Label2Lines first={{ label: 'Basket of ticket', value: 'Claim AC' }} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BusinessIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <Label2Lines first={{ label: 'Head office', value: '91250 ST GERMAIN LES CORBEIL, FRANCE' }} />
          </ListItemText>
        </ListItem>
      </List>
      <FullLineTitle title="History of ticket" />
    </div>
  );
}
