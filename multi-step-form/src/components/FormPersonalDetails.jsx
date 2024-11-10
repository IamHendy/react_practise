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

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
                  Enter Personal Details
                </Typography>
              </Toolbar>
            </AppBar>

            {/* Form Section */}
            <Box sx={{ padding: 2 }}>
              <TextField
                placeholder="Enter Your Occupation"
                label="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your Bio"
                label="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
                margin="normal"
                fullWidth
              />

              {/* Continue Button */}
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                  sx={{ marginRight: 2 }}
                >
                  Back
                </Button>
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

export default FormPersonalDetails;

