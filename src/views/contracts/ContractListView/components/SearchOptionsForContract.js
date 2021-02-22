import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  FormControl, InputLabel, MenuItem, Select
} from '@material-ui/core';
import PropTypes from 'prop-types';
import aiaContracts from '../../../../services/api/aia/contracts';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// eslint-disable-next-line no-unused-vars
const SearchOptionsForContract = ({ onChange, defaultValue }) => {
  const classes = useStyles();
  const [options, setOptions] = useState([])

  // on Mount
  useEffect(() => {
    aiaContracts.getSearchOptions()
      .then((result) => {
        setOptions(result);
      });
  }, [])

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="selectOptionsForContractLabel">Champs</InputLabel>
      <Select
        labelId="selectOptionsForContractLabel"
        id="selectOptionsForContract"
        fullWidth
        defaultValue={defaultValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {/* eslint-disable-next-line max-len */}
        {options.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
      </Select>
    </FormControl>
  )
}

SearchOptionsForContract.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
};

export default SearchOptionsForContract;
