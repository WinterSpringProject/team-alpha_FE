import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ComputerIcon from '@material-ui/icons/Computer';
import '../components/css/Navbar.css';
<<<<<<< HEAD
import glfpimg from "../components/image/glfp.png";
=======
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c


//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>


const useStyles = makeStyles((theme) => ({   /* 이런 식으로 arrow function 사용할 것 */
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(glfp.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
<<<<<<< HEAD
    backgroundSize: 'scale-down',
=======
    backgroundSize: 'cover',
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
<<<<<<< HEAD
        <Avatar alt="Adelle Charles" src={glfpimg} className={classes.avatar}/>

=======
          <Avatar className={classes.pink}>
            <ComputerIcon />
          </Avatar>
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
          <Typography component="h1" variant="h4">
            GLFP
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ID"
              label="아이디를 입력하세요"
              name="ID"
              autoComplete="ID"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호를 입력하세요"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장하기."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
<<<<<<< HEAD
                <Link to ='/Forgot' 
                href="#" variant="body2">
=======
                <Link href="#" variant="body2">
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
                  비밀번호를 잊으셨나요?
                </Link>
              </Grid>
              <Grid item>
<<<<<<< HEAD
                <Link to='/Sign-up'
                href="#" variant="body2">
                  "처음이신가요? 회원가입하기"
=======
                <Link href="#" variant="body2">
                  {"처음이신가요? 회원가입하기"}
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 74bc897bb0a324c501c74e9165bcd2cb9290c93c
