//import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageNewYork from './assets/wall_street.jpeg';
import ImageTokyo from './assets/Tokyo_stock_exchange.jpeg';
//import {Link}



export function Location({city}){
    let image;
    let text;
    let header;
    if (city === "New York") {
        image = ImageNewYork ;
        text = "Find you way on Wall Street!";
        header = "New York";
    }
    if (city === "Tokyo") {
        image = ImageTokyo;
        text = "Dominate in the Tokyan Stock Exchange!";
        header = "Tokyo";
    }
    

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={city}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play Now!</Button>
      </CardActions>
    </Card>
  );
}

