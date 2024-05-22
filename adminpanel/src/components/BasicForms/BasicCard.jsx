import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

export default function BasicCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card sx={{ width: 250, height: 130, borderRadius: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Total Amount
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹1731
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={4}>
          <Card sx={{ width: 250, height: 130, borderRadius: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Total Withdrawal
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹1264
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card sx={{width: 250, height: 130, borderRadius: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Total Recharge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹8691
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Card sx={{width: 250, height: 130, borderRadius: 4 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Total Users
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ₹27
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
