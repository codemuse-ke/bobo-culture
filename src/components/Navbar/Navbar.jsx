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
import Menubar from "../NavItems/NavItems";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
            sx={{ mr: 2 }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            component="div"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Bobo Collection Store
          </Typography>
          <Menubar />
          <SearchBar />
          {/* <Button
            startIcon={<LoginIcon />}
            size="large"
            variant="outlined"
            color="inherit"
          >
            Login
          </Button> */}
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
