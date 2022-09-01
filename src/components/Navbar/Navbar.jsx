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

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
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
            variant="h5"
            className={classes.title}
            component="div"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            BoCollection
          </Typography>
          <Menubar />
          <SearchBar />
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
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
