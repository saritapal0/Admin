import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="Admin\adminpanel\src\assets\images\users\n1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h36" component="div">
          Date:21-05-2024
        </Typography>
        <Typography variant="h6" color="text.secondary">
          News Update
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across
        </Typography>
        <Button>....Learn More</Button>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" href="#outlined-buttons">
            Edit
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
