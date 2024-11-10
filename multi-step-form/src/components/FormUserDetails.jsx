import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Custom Theme with Navy Blue
const theme = createTheme({
  palette: {
    primary: {
      main: '#001F54', // Navy Blue
    },
    secondary: {
      main: '#DC004E',
    },
  },
});

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            {/* AppBar Section */}
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Enter User Details
                </Typography>
              </Toolbar>
            </AppBar>

            {/* Form Section */}
            <Box sx={{ padding: 2 }}>
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="normal"
                fullWidth
              />

              {/* Continue Button */}
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;

