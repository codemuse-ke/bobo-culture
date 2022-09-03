import { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
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
      <ThemeProvider theme={theme}>
        <Navbar totalItems={cart?.total_items} />
        <Products products={products} onAddToCart={handleAddToCart} />
        <Cart cart={cart} />
      </ThemeProvider>
    </div>
  );
};

export default App;
