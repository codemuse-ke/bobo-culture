import React from 'react'
import { AppBar, Toolbar, IconButton,Badge,Typography,Button } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { ShoppingCart} from '@material-ui/icons'
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar  position='fixed' className={classes.appBar} color='primary'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title} color="inherit">
            {/* <MenuIcon/> */}
            Bobo Collection Store            
          </Typography>
          <Typography variant="h6" className={classes.title} color="inherit">
          Category       
          </Typography>         

          <Typography variant="h6" className={classes.title} color="inherit">
                Search       
          </Typography>          
          <div className={classes.grow}/>
          <div className={classes.button}>            
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>
          <Button>
              Login
            </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar