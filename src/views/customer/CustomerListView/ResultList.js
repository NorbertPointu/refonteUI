import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles, CardContent
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontSize: 14,
  },
}));

const ResultList = ({
  className, items, fields, ...rest
}) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Typography ml={3} className={classes.title} color="textSecondary" gutterBottom>
          { `${items.length} résultat(s)`}
        </Typography>
      </CardContent>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                {
                  fields.map((field) => <TableCell>{typeof field === 'function' ? field.name : field}</TableCell>)
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {items.slice(0, limit).map((item) => (
                <TableRow
                  hover
                  key={item.id}
                >
                  {
                    fields.map((field) => <TableCell>{typeof field === 'function' ? field(item) : item.summary[field]}</TableCell>)
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={items.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ResultList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired
};

export default ResultList;
