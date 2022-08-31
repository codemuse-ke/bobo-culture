import Product from "../Product/Product";
import { Grid } from "@mui/material";
import useStyles from "./styles";

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;