Here we can see the interest in using a form control module like "react hook form" in order to reduce the number of renderings and to set up management rules.

>https://react-hook-form.com/

>https://github.com/jquense/yup

```js
import BasicForm from './BasicForm'
import ReactHookForm from './ReactHookForm';

import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  vs: {
    marginTop: '20px',
    color: 'green',
    fontSize: 42,
    fontWeight: 600,
  }
}));

const classes = useStyles();

<Box
  display="flex"
  flexDirection="row"
  width="100%"
  alignItems="start"
  justifyContent="center">
  <div style={{ width: '400px' }}>
    <BasicForm/>
  </div>
  <Typography
    className={classes.vs}
    variant="h4"
  >
    vs
  </Typography>
  <div style={{ width: '400px' }}>
    <ReactHookForm/>
  </div>
</Box>

```

For React Hook Form :

Put **register** function on each **ref** or **inputRef** properties of input.
Each inputs need to have a **name** property 

set function **handleSubmit** of useForm on the callback of form.onSubmit and pass it your own final callack, like
```
const { register, handleSubmit } = useForm()
const mySubmit=(data) => { console.log(data)}

<form onSubmit={handleSubmit(mySubmit)} >
  <TextField name="userName"
             inputRef={register}/>
</form> 
 ```

>**Notes**: We can list errors in the form.
Knows if the submit is in progress.
Knows it the submit has been done and how many times, etc...
>>Check **fromState** object for detail.

