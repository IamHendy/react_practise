import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Custom Theme with Navy Blue
const theme = createTheme({
  palette: {
    primary: {
      main: '#001F54', // Navy Blue
    },
    secondary: {
      main: '#DC004E', // Example secondary color
    },
  },
});

export class Success extends Component {
  continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
  };

  back = (e) => {
      e.preventDefault();
      this.props.prevStep();
  };

  render() {
      const { values } = this.props;

      return (
          <ThemeProvider theme={theme}>
              <Dialog open fullWidth maxWidth="sm">
                  <AppBar position="static" color="primary" textAlign="center">
                      <Toolbar>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              Success!
                          </Typography>
    
                      </Toolbar>
                  </AppBar>

            <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </div>
                  
              </Dialog>
          </ThemeProvider>
      );
  }
}

export default Success;


