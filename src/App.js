import { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { orange, red } from "@material-ui/core/colors";
import "fontsource-roboto";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ line_items: [] });

  const theme = createTheme({
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
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar totalItems={cart?.total_items} />
          <Routes>
            <Route
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route
              path="*"
              element={
                <Typography variant="h2" align="center">
                  404 Not found!
                </Typography>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};
export default App;
