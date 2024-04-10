import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import imagen from '../assets/1.jpg';
function CardPost(){
    return(
        <Card sx={{ maxWidth: 180, maxHeight: 200}}>
        <CardMedia
          sx={{ height: 100 }}
          image={imagen}
          title="green iguana"
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
          <Button size="small">Compartir</Button>
          <Button size="small">Más+</Button>
        </CardActions>
      </Card>
    )
}
export default CardPost;