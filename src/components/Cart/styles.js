import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: "5%",
  },
  emptybutton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutbutton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  carddetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
