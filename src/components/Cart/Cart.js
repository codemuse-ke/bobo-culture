import { Typography, Container, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CardItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const classes = useStyles();
  //checks for empty or filled cart
  // const isEmpty = !cart.line_items?.length;
  const GetEmptyCart = () => (
    <Typography variant="subtitle1">
      The Cart is Empty!
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          //extra small devices >>fullwidth, small devices= 4 out of 12 spaces
          <Grid item xs={12} sm={4} key={item.id}>
            <CardItem item={item} />
            {/* <div>{item.name}</div> */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.carddetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptybutton}
            size="large"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.chechoutbutton}
            size="large"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "...loading";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h5" className={classes.title}>
        Shopping Cart
      </Typography>
      {!cart.line_items?.length ? <GetEmptyCart /> : <FilledCart />}
    </Container>
  );
};
export default Cart;
