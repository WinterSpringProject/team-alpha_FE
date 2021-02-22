import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ComputerIcon from '@material-ui/icons/Computer';
import { TextField, MenuItem } from "@material-ui/core"
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import '../components/css/Button.css';
import '../components/css/Section.css';



const accent = purple['A200']; // #e040fb


// function CopyRight() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="beige" to='/'>
//         GLFP
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#3f51b5'
    },
    error: {
      main: '#009688'
    },
    text: {
      primary: '#e91e63',
      secondary: '#2196f3',
      disabled: '#4caf50',
      hint: '#ffc107',
      myTextColor : '#039be5'
    }
  },
})

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img-second src="../glfp.png" />
        
        {/* <Typography component="h1" variant="h4">
          회원가입
        </Typography> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="이름을 입력하세요"
                autoFocus
              />
            </Grid>

            <Grid item xs={6}>

            <TextField select label="성별" variant="outlined" size="large">
             <MenuItem>남자</MenuItem>
             <MenuItem>여자</MenuItem>
             </TextField>
             </Grid>

            <Grid item xs={6}>
            <TextField
                id="date"
                label="생년월일"
                type="date"
                defaultValue="2000-01-01"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
              }}
              />
            </Grid>
            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ID"
                label="아이디를 입력하세요"
                name="ID"
                autoComplete="ID"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호를 입력하세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호를 한번 더 입력하세요"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="약관에 대하여 동의하나요?"
              />
            </Grid> */}
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#ffff"
            className={classes.submit}
          >
            가입하기
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="accent"
            className={classes.submit}
          >
            뒤로가기
          </Button>
          </Grid>
            </Grid>
            
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                아이디가 있으면 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}