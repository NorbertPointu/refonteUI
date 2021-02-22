import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import SearchOptionsForContract from './SearchOptionsForContract';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchRequest: {
    flex: 'auto'
  }
}));

const SearchContractRequest = ({ className, onChange, ...rest }) => {
  const classes = useStyles();
  const [searchOption, setSearchOption] = useState('person$last_name');
  const [searchValue, setSearchValue] = useState('');
  const handleChangeClick = (option) => setSearchOption(option)

  // eslint-disable-next-line max-len
  useEffect(() => onChange({ option: searchOption, value: searchValue }), [searchOption, searchValue])

  console.log('Rendering SearchContractRequest ...');
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500} display="flex" alignItems="center" className={classes.searchRequest}>
              <SearchOptionsForContract onChange={handleChangeClick} defaultValue="person$last_name" />
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                defaultValue={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search contract"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SearchContractRequest.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchContractRequest;
