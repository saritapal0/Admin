import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', m: '1px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function BasicCard() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: 6 }}>
      <Card sx={{ width: '300px', height: '500px', borderRadius: 8 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Recent Interactions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overview of Years
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
