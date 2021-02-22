import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import SearchCustomerPanel from './components/SearchCustomerPanel';
import aia from '../../../services/api/aia/contracts'
import ResultList from './ResultList';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);
  const updateResult = () => {
    if (searchText === '') return;

    aia
      .search('contract$product_identifier', searchText)
      .then((res) => res)
      .then((data) => setResult(data));
  };

  const onSearchTextChange = (value) => {
    setSearchText(value)
  };
  const getResult = () => {
    return (result.data && result.data._count) ? result.data._links.item : [];
  };
  useEffect(() => console.log('result', result));

  useEffect(() => updateResult(), [searchText]);

  const fields = ['person$first_name', 'person$last_name', 'contract$number', 'contract$start_date',
    function product(contract) {
      const { summary } = contract;
      return `${summary.contract$product_identifier} ${summary.contract$product_label} ${summary.contract$product_type}`;
    }];
  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      {searchText}
      <Container maxWidth={false}>
        <SearchCustomerPanel onChange={(value) => onSearchTextChange(value)} />
        <Box mt={3}>
          {1 && <ResultList items={getResult()} fields={fields} />}
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
