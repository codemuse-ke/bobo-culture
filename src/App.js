import { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, red } from "@material-ui/core/colors";
import "fontsource-roboto";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[400],
      },
      secondary: {
        main: red[400],
      },
    },
  });

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const { cart } = await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(products);
  console.log(cart);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Products products={products} />
      </ThemeProvider>
    </div>
  );
};

export default App;
