import { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { orange, red } from "@material-ui/core/colors";
import "fontsource-roboto";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: orange[400],
  //     },
  //     secondary: {
  //       main: red[400],
  //     },
  //   },
  // });

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  console.log(cart.total_items);
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
