import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ name, description, price, image }) => {
  const classes = useStyles();

  return (
    <Card className="root">
      <CardMedia className={classes.media} image={image.url} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{price.formatted_with_symbol}</Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
