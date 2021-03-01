import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
<<<<<<< HEAD
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

=======
import Link from '@material-ui/core/Link';
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ComputerIcon from '@material-ui/icons/Computer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';



function CopyRight() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="beige" to='/'>
        GLFP
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ComputerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        <Box fontWeight="fontWeightBold">
          GLFP에 오신것을 환영합니다
          </Box>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Id"
                label="ID를 입력해주세요"
                name="Id"
                autoComplete="Id"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password를 입력해주세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="green"
            className={classes.submit}
          >
            로그인
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
<<<<<<< HEAD
              <Link to='/Sign-up' 
=======
              <Link to='/Signup' 
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
              href="#" variant="body2">
                처음이신가요? 회원가입하기
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

// <Link 
// to='/Log-in'
// className='nav-links'
// onClick={closeMobileMenu}>
//     로그인
// </Link>