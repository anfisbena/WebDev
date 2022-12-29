import * as React from 'react';
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@mui/material';


export default function MenuCard({image,category,href}) {
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href={href} target={'_self'}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={category}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
