import React from 'react';
import {
  IconButton, Card, CardHeader
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DataGroup from './DataGroup';
import DataGroupItem from './DataGroupItem';

const TicketDetailV2 = () => {
  const items = [{
    label: 'Client',
    value: 'Operation - Arbitrage'
  }, {
    label: 'Received on',
    value: '20/01/2020'
  }];

  const content = items.map((it) => <DataGroupItem item={it} />)
  return (
    <Card>
      <CardHeader
        title="Ticket details"
        action={<IconButton size="small"><CloseIcon fontSize="small" /></IconButton>}
      />
      <DataGroup title="Description" content={content} />
      <DataGroup
        title="Description 2"
        content={(
          <div>
            base64-arraybuffer-es6@0.6.0 requires a peer of core-js-bundle@^3.6.5 but none is installed. You must install peer dependencies yourself.
          </div>
)}
      />
    </Card>
  );
};

export default TicketDetailV2;
