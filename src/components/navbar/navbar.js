import React, { useState } from 'react';
import { useStyles } from './navbarCss'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Authenticate from './authenticate';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import logo from '../../assets/cwz.png';
export default function Navbar() {
  const classes = useStyles();
  const [username, setUsername] = useState(localStorage.getItem('username'));
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: 'white',boxShadow:"none",color:"black"}} >
        <Toolbar>
          <img src={logo} />
          {/* <Typography variant="h6" className={classes.title}>
            Navbar
          </Typography> */}
          {username ? (
            <Grid container spacing={3} className={classes.marginLeft}>
              <Grid item md={4} xs={14}>
                <Link to="/post" className={classes.link} >
                  <Button color="inherit">Post a Bounty</Button>

                </Link>
              </Grid>
              <Grid item md={4} xs={14}>
                <Link to="/explore" className={classes.link}>
                  <Button color="inherit">Solve a Bounty</Button>
                </Link>
              </Grid>
              <Grid item md={4} xs={14}>
                <Link to="/explore" className={classes.link}>
                  <Button color="inherit">Vote a Bounty</Button>
                </Link>
              </Grid>

            </Grid>
          ) : null}
          <Authenticate />
        </Toolbar>
      </AppBar>
    </div>
  );
}
