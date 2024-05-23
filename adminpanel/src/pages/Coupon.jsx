import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Box>
    <Card sx={{ width: 1010, height: 250,  borderRadius:5}}> {/* Adjust width and height as needed */}
      <CardContent>
        <Typography varient="h1">
          Coupons
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}
