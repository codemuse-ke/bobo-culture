import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography,IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

const Product = ({name,description,price,image}) => {
  const classes = useStyles();
  return (
    <Card className='root'>
      <CardMedia className={classes.media} image={image} title={Product.name}/>    
      <CardContent>
        <div className={classes.cardContent}>
          <Typography  variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography  variant="h5" >
            {price}
          </Typography>
        </div>
        <Typography  variant="body2" color="textSecondary">
            {description}
          </Typography>
      </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label ="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product