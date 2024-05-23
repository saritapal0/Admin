import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Task from "../assets/images/users/task.jpg";
import CardActions from '@mui/material/CardActions';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', height: '100%' }}>
      <CardMedia
        component="img" // Use component="img" for CardMedia to specify image
        height="auto"
        image={Task}
       
      />
      <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        Today Task Sunil Narine might nthink he Writing tasks are used for direct testing of
         writing ability
     </Typography>
     <CardActions>
        <Button size="small">....Learn More</Button>
      </CardActions>
      </CardContent>
      <Stack direction="row" spacing={2}>
      <Button variant="outlined" href="#outlined-buttons">
        Edit
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Delete
      </Button>
    </Stack>
    </Card>
  );
}
