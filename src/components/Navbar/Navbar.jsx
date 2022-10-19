import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ShoppingCart } from "@material-ui/icons";
import LoginIcon from "@mui/icons-material/Login";
import useStyles from "./styles";
import Menubar from "./NavItems/NavItems";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  // if(location.pathname === "/")

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="medium"
            sx={{ mr: 2 }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            BoboCulture
          </Typography>
          <Menubar />
          <SearchBar />
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              {/* <Link to="/cart">go to cart</Link> */}
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge
                  overlap="rectangular"
                  badgeContent={totalItems}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
          <Button
            endIcon={<LoginIcon />}
            size="large"
            variant="text"
            color="inherit"
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
