import React from 'react';
import TicketDetails from './TicketDetails';
import Panel from '../common/Panel';

const NextPriorityTicketPanel = () => {
  return (
    <Panel title="Next priority ticket">
      <TicketDetails />
    </Panel>
  );
};
export default NextPriorityTicketPanel;
