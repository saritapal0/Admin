import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image1 from "../../assets/images/backgrounds/u2.jpg"
import image2 from "../../assets/images/backgrounds/u3.jpg"
import image3 from "../../assets/images/backgrounds/u4.jpg"

export default function MediaCard() {
  return (
    <Grid container spacing={3}> 
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ width: 'auto', height: "420px", maxHeight: "420px", borderRadius: 4 }}>
          <CardMedia
            component="img" // Use component="img" for CardMedia to specify image
            height="auto"
            image={image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4}> {/* Adjust the size as needed */}
        <Card sx={{ width: 'auto', height: "420px", maxHeight: "420px", borderRadius: 4 }}>
          <CardMedia
            component="img" // Use component="img" for CardMedia to specify image
            height="auto"
            image={image2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4}> {/* Adjust the size as needed */}
        <Card sx={{ width: 'auto', height: "420px", maxHeight: "420px", borderRadius: 4 }}>
          <CardMedia
            component="img" // Use component="img" for CardMedia to specify image
            height="auto"
            image={image3}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
