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

export class Confirm extends Component {
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
                  <AppBar position="static" color="primary">
                      <Toolbar>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              Confirm Your Details
                          </Typography>
                      </Toolbar>
                  </AppBar>

                  <Box sx={{ padding: 3 }}>
                      <List>
                          <ListItem>
                              <ListItemText primary="First Name" secondary={values.firstName} />
                          </ListItem>
                          <ListItem>
                              <ListItemText primary="Last Name" secondary={values.lastName} />
                          </ListItem>
                          <ListItem>
                              <ListItemText primary="Email" secondary={values.email} />
                          </ListItem>
                          <ListItem>
                              <ListItemText primary="Occupation" secondary={values.occupation} />
                          </ListItem>
                          <ListItem>
                              <ListItemText primary="City" secondary={values.city} />
                          </ListItem>
                          <ListItem>
                              <ListItemText primary="Bio" secondary={values.bio} />
                          </ListItem>
                      </List>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                          <Button color="secondary" variant="outlined" onClick={this.back}>
                              Back
                          </Button>
                          <Button color="primary" variant="contained" onClick={this.continue}>
                              Confirm
                          </Button>
                      </Box>
                  </Box>
              </Dialog>
          </ThemeProvider>
      );
  }
}

export default Confirm;


