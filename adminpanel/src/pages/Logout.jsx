import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 350,
          height: 400,
          borderRadius: 6,
          padding: 2,
        }}
      >
        <div>

          <Checkbox {...label} defaultChecked color="success" />

        </div>
        <Typography variant="h5" gutterBottom>
          Successfully Logged Out
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Login again to access the page
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Button variant="contained" color="primary">
          Go To Login
        </Button>
      </Paper>
    </Box>
  );
}
