import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles, CardHeader, Card, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const schema = yup.object().shape({
  userName: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

let renderCount = 0;
const ReactHookForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    userName: undefined, email: undefined, password: undefined
  });
  const [mode, setMode] = useState('onSubmit');
  renderCount += 1;

  // formState contains the current state of the form (errors, validated, submitted, number of submitted, sumitted in progress)
  const {
    register, handleSubmit, formState, errors
  } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

  // If we are in submitting we will diseable the validate button
  const { isSubmitting, isValid } = formState;
  const onSubmit = async (handledData) => {
    // Simulate an api call of 2 sec
    await wait(2000);
    console.log('handledData', handledData);
    setData(handledData);
  };

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                React Hook Form
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Handled by module React Hook Form and Yup
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              name="userName"
              inputRef={register()}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              inputRef={register()}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              inputRef={register()}
              variant="outlined"
            />
            <Box my={2}>
              <Button
                disabled={isSubmitting}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Validate
              </Button>
            </Box>
          </form>
          <Card>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Card>
                Result are available on validate
                <CardContent>
                  <div>
                    Number of render :
                    <span style={{ color: 'red' }}>{renderCount}</span>
                  </div>
                  <div>
                    UserName :
                    {data.userName}
                  </div>
                  <div>
                    email :
                    {data.email}
                  </div>
                  <div>
                    password :
                    {data.password}
                  </div>
                  <div>
                    errors :
                    {errors && Object.entries(errors).map(([key, value]) => (
                      <Alert severity="error">
                        {key}
                        :
                        {value.message}
                      </Alert>
                    ))}
                    {isValid && (
                    <Alert severity="success">
                      All are corrects using yup
                    </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Box>

          </Card>
        </Container>

      </Box>

    </Page>
  );
};

export default ReactHookForm;
