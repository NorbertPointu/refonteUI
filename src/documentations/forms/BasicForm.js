import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles, CardHeader, Card, CardContent
} from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

let renderCount = 0;
const BasicForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    username: undefined, email: undefined, password: undefined
  });
  renderCount += 1;

  const handleChange = (e, field) => {
    setData({ ...data, [[field]]: e.target.value });
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
          <form>
            <Box mb={3}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Standard
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Handled by setting state on change event
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              name="userName"
              required
              onChange={(e) => handleChange(e, 'username')}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              onChange={(e) => handleChange(e, 'email')}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              onChange={(e) => handleChange(e, 'password')}
              variant="outlined"
            />
            <Box my={2}>
              <Button
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
          <Box>
            <Card>
              Result are available at any times
              <CardContent>
                <div>
                  Number of render :
                  <span style={{ color: 'red' }}>{renderCount}</span>
                </div>
                <div>
                  UserName :
                  {data.username}
                </div>
                <div>
                  email :
                  {data.email}
                </div>
                <div>
                  password :
                  {data.password}
                </div>
              </CardContent>
            </Card>

          </Box>
        </Container>

      </Box>

    </Page>
  );
};

export default BasicForm;
