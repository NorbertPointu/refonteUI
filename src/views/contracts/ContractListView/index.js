import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import SearchContractRequest from './components/SearchContractRequest';
import ResultList from './ResultList';
import aiaContracts from '../../../services/api/aia/contracts';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ContractListView = () => {
  const classes = useStyles();
  const [search, setSearch] = useState(undefined);
  const [result, setResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const updateResult = () => {
    if (!search || search.value === '') return;

    setIsSearching(true)
    console.log('updateResult', search);
    aiaContracts.search(search.option, search.value)
      .then((res) => res)
      .then((data) => setResult(data))
      .finally(() => setIsSearching(false))
  };

  const onSearchChange = (value) => {
    console.log('setSearch', value);
    setSearch(value)
  };
  const getResult = () => {
    if (result.data) {
      if (result.data._count === 0) return []
      if (result.data._count === 1) return [result.data._links.item]
      return result.data._links.item
    }
    return []
  };
  // useEffect(() => console.log('result', result));

  useEffect(() => updateResult(), [search]);

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
      <Container maxWidth={false}>
        <SearchContractRequest onChange={(value) => onSearchChange(value)} />
        <Box mt={3}>
          {1 && <ResultList items={getResult()} fields={fields} isLoading={isSearching} />}
        </Box>
      </Container>
    </Page>
  );
};

export default ContractListView;
