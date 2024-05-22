import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
          flexDirection: 'column', // Align items in a column
          alignItems: 'center',
          width: 350,
          height: 400,
          borderRadius: 6,
          padding: 2,
        }}
      >
        <Box sx={{ flex: 1 }} /> {/* Empty space to push the button to the bottom */}
        <Button variant="contained" color="primary">
          Go To Login
        </Button>
      </Paper>
    </Box>
  );
}
