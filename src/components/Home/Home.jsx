import React from 'react';
import './Home.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkTwo } from 'react-router-dom'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8,4),
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
export default function SignInSide() {
  const classes = useStyles();
  return (
      <div className="home">
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
          <br/><br/><br/><br/><br/><br/>
          <Typography component="h1" variant="h5">
          <h1 ><strong>Explore</strong></h1>
          </Typography>
          <Typography component="h1" variant="h5">
          <h3>Discover Places Around you</h3>
          </Typography>
          <Typography component="h6" variant="h10">
          <h5>Find the best places to visit in any city in Saudi Arabia.</h5>
          </Typography>
          <LinkTwo to="/Explore">
            { <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#d5c455"
              className={classes.submit}
            >
             Get started
            </Button> }
            </LinkTwo>
            <Grid container>
              <Grid item xs>
               
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}