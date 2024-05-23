import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

export default function BasicCard() {
  return (
    <Box sx={{ flexGrow: 1, marginRight: '50px'}} >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card sx={{ width: 230, height: 120, borderRadius: 4 ,marginRight:30 }}>
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

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card sx={{ width: 230, height: 120, borderRadius: 4, marginRight:30}}>
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

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card sx={{width: 230, height: 120, borderRadius: 4 ,marginRight:30}}>
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card sx={{width: 230, height: 120, borderRadius: 4 ,marginRight:30}}>
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
